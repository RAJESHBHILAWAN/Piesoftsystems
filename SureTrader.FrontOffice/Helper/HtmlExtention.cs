using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace SureTrader.FrontOffice.Helper
{
    public static class HtmlExtention
    {

        /// <summary>
        /// Begins a collection item by inserting either a previously used .Index hidden field value for it or a new one.
        /// </summary>
        /// <typeparam name="TModel"></typeparam>
        /// <param name="html"></param>
        /// <param name="collectionName">The name of the collection property from the Model that owns this item.</param>
        /// <returns></returns>
        public static IDisposable BeginCollectionItem<TModel>(this HtmlHelper<TModel> html, string collectionName)
        {
            if (String.IsNullOrEmpty(collectionName))
                throw new ArgumentException("collectionName is null or empty.", "collectionName");

            string collectionIndexFieldName = String.Format("{0}.Index", collectionName);

            string itemIndex = null;
            if (html.ViewData.ContainsKey(JQueryTemplatingEnabledKey))
            {
                itemIndex = "${index}";
            }
            else
            {
                itemIndex = GetCollectionItemIndex(collectionIndexFieldName);
            }

            string collectionItemName = String.Format("{0}[{1}]", collectionName, itemIndex);

            TagBuilder indexField = new TagBuilder("input");
            indexField.MergeAttributes(new Dictionary<string, string>() {
                { "name", collectionIndexFieldName },
                { "value", itemIndex },
                { "type", "hidden" },
                { "autocomplete", "off" }
            });

            html.ViewContext.Writer.WriteLine(indexField.ToString(TagRenderMode.SelfClosing));

            var iteams = new CollectionItemNamePrefixScope(html.ViewData.TemplateInfo, collectionItemName);
            return iteams;
        }

        private const string JQueryTemplatingEnabledKey = "__BeginCollectionItem_jQuery";

        public static MvcHtmlString CollectionItemJQueryTemplate<TModel, TCollectionItem>(this HtmlHelper<TModel> html,
                                                                                            string partialViewName,
                                                                                            TCollectionItem modelDefaultValues)
        {
            ViewDataDictionary<TCollectionItem> viewData = new ViewDataDictionary<TCollectionItem>(modelDefaultValues);
            viewData.Add(JQueryTemplatingEnabledKey, true);
            return html.Partial(partialViewName, modelDefaultValues, viewData);
        }

        /// <summary>
        /// Tries to reuse old .Index values from the HttpRequest in order to keep the ModelState consistent
        /// across requests. If none are left returns a new one.
        /// </summary>
        /// <param name="collectionIndexFieldName"></param>
        /// <returns>a GUID string</returns>
        private static string GetCollectionItemIndex(string collectionIndexFieldName)
        {
            Queue<string> previousIndices = (Queue<string>)HttpContext.Current.Items[collectionIndexFieldName];
            if (previousIndices == null)
            {
                HttpContext.Current.Items[collectionIndexFieldName] = previousIndices = new Queue<string>();

                string previousIndicesValues = HttpContext.Current.Request[collectionIndexFieldName];
                if (!String.IsNullOrWhiteSpace(previousIndicesValues))
                {
                    foreach (string index in previousIndicesValues.Split(','))
                        previousIndices.Enqueue(index);
                }
            }

            return previousIndices.Count > 0 ? previousIndices.Dequeue() : Guid.NewGuid().ToString();
        }



        private class CollectionItemNamePrefixScope : IDisposable
        {
            private readonly TemplateInfo _templateInfo;
            private readonly string _previousPrefix;

            public CollectionItemNamePrefixScope(TemplateInfo templateInfo, string collectionItemName)
            {
                this._templateInfo = templateInfo;

                _previousPrefix = templateInfo.HtmlFieldPrefix;
                templateInfo.HtmlFieldPrefix = collectionItemName;
            }

            public void Dispose()
            {
                _templateInfo.HtmlFieldPrefix = _previousPrefix;
            }
        }



        #region Label

        //public static MvcHtmlString LabelFor<TModel, TValue>(this HtmlHelper<TModel> html, 
        //Expression<Func<TModel, TValue>> expression)
        public static MvcHtmlString LabelCutomFor<TModel, TValue>(this HtmlHelper<TModel> html,
            Expression<Func<TModel, TValue>> expression,
            object htmlAttributes)
        {

            ModelMetadata metadata = ModelMetadata.FromLambdaExpression(expression, html.ViewData);
            string htmlFieldName = ExpressionHelper.GetExpressionText(expression);
            string labelText = metadata.DisplayName ?? metadata.PropertyName ?? htmlFieldName.Split('.').Last();
            if (String.IsNullOrEmpty(labelText))
            {
                return MvcHtmlString.Empty;
            }

            string str = metadata.DisplayName;
            if (str == null)
            {
                string propertyName = metadata.PropertyName;
                if (propertyName == null)
                    str = Enumerable.Last<string>((IEnumerable<string>)htmlFieldName.Split(new char[1]
          {
            '.'
          }));
                else
                    str = propertyName;
            }



            string innerText = str;
            TagBuilder tagBuilder = new TagBuilder("label");
            tagBuilder.Attributes.Add("for", html.ViewContext.ViewData.TemplateInfo.GetFullHtmlFieldId(htmlFieldName));
            tagBuilder.SetInnerText(innerText);



            IDictionary<string, object> attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);
            bool flag = true;
            int num = flag ? 1 : 0;
            tagBuilder.MergeAttributes<string, object>(attributes, num != 0);

            if (metadata.IsRequired)
            {
                var classAttribute = tagBuilder.Attributes.FirstOrDefault(f => f.Key == "Class" || f.Key == "class");
                var extCss = String.Format("{0} required", classAttribute.Value);

                tagBuilder.Attributes.Remove("class");
                tagBuilder.Attributes.Remove("Class");
                tagBuilder.AddCssClass(extCss);
            }

            return MvcHtmlString.Create(tagBuilder.ToString(TagRenderMode.Normal));
        }
        #endregion

        #region ABCPDF
        public static string RenderViewToString(Controller controller, string viewName, object model, string masterName)
        {
            controller.ViewData.Model = model;

            using (StringWriter sw = new StringWriter())
            {
                ViewEngineResult viewResult = ViewEngines.Engines.FindView(controller.ControllerContext, viewName, masterName);
                ViewContext viewContext = new ViewContext(controller.ControllerContext, viewResult.View, controller.ViewData, controller.TempData, sw);
                viewResult.View.Render(viewContext, sw);

                return sw.GetStringBuilder().ToString();
            }
        }
        #endregion
    }
}
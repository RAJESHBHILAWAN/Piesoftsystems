using System;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.Practices.Unity;

namespace SureTrader.DI
{
    public class UnityControllerFactory : DefaultControllerFactory
    {
        private readonly IUnityContainer _container;

        public UnityControllerFactory(IUnityContainer container)
        {
            this._container = container;
        }

        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {
            try
            {
                if (controllerType == null)
                    return base.GetControllerInstance(requestContext, controllerType);

                if (!typeof(IController).IsAssignableFrom(controllerType))
                    throw new ArgumentException("Type requested is not a controller", "controllerType");

                return _container.Resolve(controllerType) as IController;
            }
            catch (Exception)
            {
               return null; 
            }
        }
    }
}

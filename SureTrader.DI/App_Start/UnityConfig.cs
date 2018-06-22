using Microsoft.Practices.Unity;
using System.Web.Http;
//using Unity.WebApi;

namespace SureTrader.DI
{
    public static class UnityConfig
    {
        public static object GlobalConfiguration { get; private set; }

        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

         //   System.Web.Mvc.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}
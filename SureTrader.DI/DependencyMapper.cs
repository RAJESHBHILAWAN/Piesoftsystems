
using SureTrader.Services;
using Microsoft.Practices.Unity;
using Microsoft.Practices.ServiceLocation;
using SureTrader.Core.Contracts;
using System.Web.Mvc;

namespace SureTrader.DI
{
    public class DependencyMapper
    {
        public static void Initialize()
        {
            var container = new UnityContainer();

            container.RegisterType<IEmployeee,EmployeeeRepo>();
           


            ControllerBuilder.Current.SetControllerFactory(new UnityControllerFactory(container));
            var locator = new UnityServiceLocator(container);
            ServiceLocator.SetLocatorProvider(() => locator);
        }
    }
}

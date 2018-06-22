using Microsoft.Practices.Unity;

namespace SureTrader.DI
{
    internal class UnityDependencyResolver
    {
        private UnityContainer container;

        public UnityDependencyResolver(UnityContainer container)
        {
            this.container = container;
        }
    }
}
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SureTrader.FrontOffice.Startup))]
namespace SureTrader.FrontOffice
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

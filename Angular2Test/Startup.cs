using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular2Test.Startup))]
namespace Angular2Test
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}

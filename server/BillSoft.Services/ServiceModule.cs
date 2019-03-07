using Microsoft.Extensions.DependencyInjection;
using BillSoft.Services.SClient;

namespace BillSoft.Services
{
    public static class ServicesModule
    {
        public static void Register(IServiceCollection services)
        {
            services.AddTransient<IClientService, ClientService>();
            
        }
        
    }
}
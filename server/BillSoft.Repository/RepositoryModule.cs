using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BillSoft.Repository.RClient;


namespace BillSoft.Repository
{
    public static class RepositoryModule
    {
        public static void Register(IServiceCollection services, string connection, string migrationsAssembly)
        {
            services.AddDbContext<BillSoftContext>(options => options.UseSqlServer(connection, builder => builder.MigrationsAssembly(migrationsAssembly)));
            services.AddTransient<IClientRepository, ClientRepository>();
           
        }
    }
}
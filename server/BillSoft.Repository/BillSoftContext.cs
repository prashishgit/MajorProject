using Microsoft.EntityFrameworkCore;
using BillSoft.Repository.Domain;
namespace BillSoft.Repository
{
    public class BillSoftContext : DbContext
    {
        public BillSoftContext(DbContextOptions<BillSoftContext> options) : base(options)
        {
        }
        public DbSet<Client> Clients { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
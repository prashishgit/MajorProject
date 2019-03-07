using BillSoft.Repository.Domain;

namespace BillSoft.Repository.RClient
{
    public class ClientRepository : GenericRepository<Client>, IClientRepository
    {
        public ClientRepository(BillSoftContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}
using BillSoft.Repository.Domain;
using BillSoft.Repository.RClient;
namespace BillSoft.Services.SClient
{
    public class ClientService : GenericService<Client>, IClientService
    {
        public ClientService(IClientRepository clientRepository) : base(clientRepository) 
        {
            
        }
    }
}
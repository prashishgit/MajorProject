using System.Collections.Generic;
namespace BillSoft.Services
{
    public interface IGenericService<T>
    {
         IList<T> GetAll();
         T GetById(int id);
         void Insert(T entity);
         void Update(T entity);
         void Delete(T entity);
    }
}
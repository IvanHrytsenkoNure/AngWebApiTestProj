using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Repositories.Interfaces.Base
{
    public interface IBaseRepository<T>
    {

        public Task<List<T>> GetListAsync(); // getting list of all objects

        public IQueryable<T> GetQueryable();// getting query of all objects
        public Task CreateAsync(T entity); // inserting object into database
        public Task<T> ReadAsync(T entity); // getting single object 
        public Task UpdateAsync(T entity); // updating object
        public Task DeleteAsync(T entity); // deleting object       
    }
}

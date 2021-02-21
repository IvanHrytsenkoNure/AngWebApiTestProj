using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.AppContext;
using WebApi.Entities.Base;

namespace WebApi.Repositories.Base
{
    public class BaseRepository<T> where T : BaseEntity
    {
        private ApplicationContext _context;
        protected DbSet<T> _dbSet;

        public BaseRepository(ApplicationContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();

        }
        public async Task CreateAsync(T entity)
        {

            await _dbSet.AddAsync(entity);
            await Save();
        }
        public async Task<T> ReadAsync(T entity)
        {
            var entityFinded = await _dbSet.FirstOrDefaultAsync(p => p.Id == entity.Id && p.IsRemoved == false);
            return entityFinded;
        }
        public async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await Save();
        }

        public async Task DeleteAsync(T entity)
        {
            entity.IsRemoved = true;
            await Save();
        }

        public async Task<List<T>> GetListAsync()
        {
            return await _dbSet.Where(p => p.IsRemoved == false).ToListAsync();
        }

        public IQueryable<T> GetQueryable()
        {
            return _dbSet.Where(p => p.IsRemoved == false);
        }

        public async Task Save()// saving changes
        {
            await _context.SaveChangesAsync();
        }
    }
}

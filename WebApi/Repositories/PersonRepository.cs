using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.AppContext;
using WebApi.Entities;
using WebApi.Repositories.Base;
using WebApi.Repositories.Interfaces;

namespace WebApi.Repositories
{
    public class PersonRepository : BaseRepository<PersonEntity>, IPersonRepository
    {
        public PersonRepository(ApplicationContext context) : base(context)
        { }
    }
}

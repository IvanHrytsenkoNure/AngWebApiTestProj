using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Repositories.Interfaces.Base;

namespace WebApi.Repositories.Interfaces
{
    public interface IPersonRepository : IBaseRepository<PersonEntity>
    {

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities.Base;

namespace WebApi.Entities
{
    public class PersonEntity : BaseEntity
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        
    }
}

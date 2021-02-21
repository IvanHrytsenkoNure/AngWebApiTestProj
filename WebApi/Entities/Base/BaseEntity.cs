using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities.Base
{
    public class BaseEntity
    {
        public long Id { get; set; }

        public DateTime CreationDate { get; set; }

        public bool IsRemoved { get; set; }

        public BaseEntity()
        {
            CreationDate = DateTime.UtcNow;
        }

    }
}

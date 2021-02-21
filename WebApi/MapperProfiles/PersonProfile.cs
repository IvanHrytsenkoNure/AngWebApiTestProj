using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Models;

namespace WebApi.MapperProfiles
{
    public class PersonProfile : Profile
    {

        public PersonProfile()
        {
            CreateMap<PersonEntity, PersonModel>();
            CreateMap<PersonModel, PersonEntity>();
        }
    }
}

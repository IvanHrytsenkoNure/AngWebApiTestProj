using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;
using WebApi.Models;
using WebApi.Repositories.Interfaces;

namespace WebApi.Controllers
{
    public class PersonController : Controller
    {
        private readonly IPersonRepository _personRepository;
        private readonly IMapper _mapper;

        public PersonController(IPersonRepository personRepository, IMapper mapper)
        {
            _personRepository = personRepository;
            _mapper = mapper;
        }

        [HttpPost("/getPerson")]
        public async Task<IActionResult> GetPersonAsync([FromBody] PersonModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid model");
            }
            var personEntity = _mapper.Map<PersonEntity>(model);

            var personEntityFromDb = await _personRepository.ReadAsync(personEntity);
            var modelToClient = _mapper.Map<PersonModel>(personEntityFromDb);

            return Ok(modelToClient);
        }

        [HttpPost("/createPerson")]     
        public async Task<IActionResult> CreatePersonAsync([FromBody] PersonModel model)//there no need to pass id of person to create it. EF make it by default
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid model");
            }
            var personEntity = _mapper.Map<PersonEntity>(model);
            await _personRepository.CreateAsync(personEntity);
            return Ok();
        }


        [HttpPost("/getAllPersons")]
        public async Task<IActionResult> GetAllPersonsAsync()
        {
            var personEntities = await _personRepository.GetListAsync();
            var personModels = _mapper.Map<List<PersonModel>>(personEntities);
            return Ok(personModels);
        }

        [HttpPost("/editPerson")]
        
        public async Task<IActionResult> EditPersonAsync([FromBody] PersonModel editModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid model");
            }
            var personEntity = _mapper.Map<PersonEntity>(editModel);
            await _personRepository.UpdateAsync(personEntity);
            return Ok();
        }

        [HttpPost("/deletePerson")]        
        public async Task<IActionResult> DeletePersonAsync([FromBody] PersonModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid model");
            }
            var personEntity = _mapper.Map<PersonEntity>(model);
            var personEntityFromDb = await _personRepository.ReadAsync(personEntity);
            await _personRepository.DeleteAsync(personEntityFromDb);
            return Ok();
        }
    }
}

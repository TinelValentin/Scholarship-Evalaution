using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ScholarshipEvalaution.Models;
using ScholarshipEvalaution.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScholarshipEvalaution.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InternController : ControllerBase
    {
        IInternCollectionService _internsCollectionService;

        public InternController(IInternCollectionService internsCollectionService)
        {
            this._internsCollectionService = internsCollectionService;

            _internsCollectionService = internsCollectionService ?? throw new ArgumentNullException(nameof(internsCollectionService));

        }
        /// <summary>
        /// Get all interns
        /// </summary>
        /// <returns>a list of interns</returns>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _internsCollectionService.GetAll());
        }
        /// <summary>
        /// Get an intern with a certain id
        /// </summary>
        /// <param name="id">intern's id</param>
        /// <returns>an intern</returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOne(Guid id)
        {
            if (id == Guid.Empty || id == null)
                id = Guid.NewGuid()
                    ;
            return Ok(await _internsCollectionService.Get(id));
        }
        /// <summary>
        /// Deletes an intern with a certain id
        /// </summary>
        /// <param name="id">intern's id</param>
        /// <returns>the list of intern updated</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if(id==Guid.Empty||id==null)
            {
                return BadRequest("Id is invalid!");
            }
            bool result =await _internsCollectionService.Delete(id);
            if(!result)
            {
                return NotFound("Intern dosen't exist!");
            }
            return Ok(await _internsCollectionService.GetAll());
        }
        /// <summary>
        /// update an intern with a certain id
        /// </summary>
        /// <param name="id">intern's id</param>
        /// <param name="newIntern">the new intern</param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id,Intern newIntern)
        {
            newIntern.Id = id;
            if (id == Guid.Empty || id == null)
            {
                return BadRequest("Id is invalid!");
            }
            bool result = await _internsCollectionService.Update(id,newIntern);
            if (!result)
            {
                return NotFound("Intern dosen't exist!");
            }

            return Ok(await _internsCollectionService.GetAll());
        }
        /// <summary>
        /// Create a new intern
        /// </summary>
        /// <param name="newIntern"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Create(Intern newIntern)
        {
            if(newIntern==null)
            {
                return BadRequest("Intern is not valid!");
            }

            if(newIntern.Id==Guid.Empty||newIntern.Id==null)
            {
                newIntern.Id = Guid.NewGuid();
            }
            bool result = await _internsCollectionService.Create(newIntern);
            if(!result)
            {
                return BadRequest("Intern could not be created!");
            }
            return Ok(await _internsCollectionService.GetAll());
        }
    }
}

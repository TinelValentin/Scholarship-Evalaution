using ScholarshipEvalaution.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScholarshipEvalaution.Services
{
    public interface IInternCollectionService
    {
        Task<List<Intern>> GetAll();
        Task<bool> Create(Intern newIntern);
        Task<bool> Update(Guid id, Intern newIntern);
        Task<bool> Delete(Guid id);
        Task<Intern> Get(Guid id);
    }
}

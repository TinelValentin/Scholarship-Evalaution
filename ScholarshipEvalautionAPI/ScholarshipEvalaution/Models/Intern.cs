using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScholarshipEvalaution.Models
{
    public class Intern
    {
        public string Name { get; set; }
        public string DateOfBirth { get; set; }
        public float Age { get; set; }
        public string HireDate { get; set; }
        public string Position { get; set; }
        public Guid? Id { get; set; }


    }
}

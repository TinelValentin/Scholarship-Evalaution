using MongoDB.Driver;
using ScholarshipEvalaution.Models;
using ScholarshipEvalaution.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScholarshipEvalaution.Services
{
    public class InternCollectionService : IInternCollectionService
    {

        private IMongoCollection<Intern> _interns;

        public InternCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _interns = database.GetCollection<Intern>(settings.InternCollectionName);
        }
        public async Task<bool> Create(Intern newIntern)
        {
           await _interns.InsertOneAsync(newIntern);
           return true;
        }

        public async Task<bool> Delete(Guid id)
        {
            var result =await _interns.DeleteOneAsync(n => n.Id == id);
            if(result.IsAcknowledged&&result.DeletedCount==0)
            {
                return false;
            }
            return true;
        }

        public async Task<Intern> Get(Guid id)
        {
            var result = await _interns.FindAsync(n => n.Id == id);
            return result.FirstOrDefault();
        }

        public async Task<List<Intern>> GetAll()
        {
            var result = await _interns.FindAsync(n=>true);
            return result.ToList();
        }

        public async Task<bool> Update(Guid id, Intern newIntern)
        {
            var result = await _interns.ReplaceOneAsync(n => n.Id == id, newIntern);
            if(result.IsAcknowledged&&result.ModifiedCount==0)
            {
                return false;
            }
            return true;
        }
    }
}

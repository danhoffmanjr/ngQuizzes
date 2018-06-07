using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizzAPI.Data;
using QuizzAPI.Models;

namespace QuizzAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/questions")]
    public class QuestionsController : Controller
    {
        private readonly QuizContext _context;

        public QuestionsController(QuizContext context) {
            _context = context;
        }
        
        // GET api/values
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return new Question[] {
                new Question() { Id = 1, Text = "Question One" },
                new Question() { Id = 2, Text = "Question Two" }
            };
        }

        // POST: api/Questions
        [HttpPost]
        public void Post([FromBody]Question question)
        {
            _context.Questions.Add(question);
            _context.SaveChanges();
        }
        
    }
}

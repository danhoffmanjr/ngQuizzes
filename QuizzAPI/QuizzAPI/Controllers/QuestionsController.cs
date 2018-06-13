using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            return _context.Questions;
        }

        // POST: api/Questions
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return Ok(question);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Question question)
        {
            if (id != question.Id) {
                return BadRequest("Question does not exist to modify.");
            }

            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(question);
        }

    }
}

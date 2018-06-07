using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizzAPI.Models;

namespace QuizzAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/questions")]
    public class QuestionsController : Controller
    {
        
        // POST: api/Questions
        [HttpPost]
        public void Post([FromBody]Question question)
        {
        }
        
    }
}

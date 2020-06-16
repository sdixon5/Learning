using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HealthTracker.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HealthTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResponsesController : Controller
    {
        private readonly DataContext _context;

        public ResponsesController()
        {
            _context = new DataContext();
        }

        //[HttpGet]
        //public IEnumerable<Responses> GetResponses()
        //{
        //    List<Responses> responseList = _context.Responses.ToList();
        //    return responseList;
        //}

        //[HttpGet("{id}")]
        //public IEnumerable<Responses> GetUserResponses(int id)
        //{
        //    List<Responses> responseList = _context.Responses.Include(r => r.User).Where(r => r.UserId == id).ToList();
        //    return responseList;
        //}

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Responses>>> Get()
        {
            var responses = await _context.Responses.ToListAsync();
            return Ok(responses);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Responses>>> GetUser(int id)
        {
            var responses = await _context.Responses.Include(r => r.User).Where(r => r.UserId == id).ToListAsync();
            return Ok(responses);
        }
    }
}
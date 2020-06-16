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
    public class UsersController : Controller
    {

        private readonly DataContext _context;

        public UsersController()
        {
            _context = new DataContext();
        }
        
        [HttpGet]
        public IEnumerable<Users> GetUsers()
        {
            List<Users> userList = _context.Users.ToList();
            return userList;
        }

        [HttpGet("{id}")]
        public IEnumerable<Users> GetSpecificUser(string SAmaccountName)
        {
            List<Users> user = _context.Users.Where(u => u.SAmacountName == SAmaccountName).ToList();
            return user;
        }
    }
}
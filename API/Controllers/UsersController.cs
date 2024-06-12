using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<IEnumerable<AppUsers>> GetUsers()
        {
            var users = _context.Users.ToList();
            return users;
        }

        [HttpGet("{id}")]
        public ActionResult<AppUsers> GetUser(int id) // Changed from GetUsers to GetUser
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost]
        public async Task<ActionResult<AppUsers>> AddUser(AppUsers user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            _context.Users.Add(user);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

            // Return the newly created user with a 201 Created status
            return CreatedAtAction(nameof(GetUser), new { id = user.id}, user);
        }
    }
}

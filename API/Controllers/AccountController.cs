using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entity;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using API.data_tranfer;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("register")] //POST: api/account/register

        public async Task<ActionResult <AppUsers>> Register(RegisterDTO userDTO)
        {
            if (await UserExists(userDTO.Username)) return BadRequest("user alredy exist");
            using var hmac = new HMACSHA512();

            var user = new AppUsers
            {
                UserName = userDTO.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password)),
                PassworSalt = hmac.Key
                
            };
            
            _context.Users.Add(user);
            await _context.SaveChangesAsync(); 
            return user;
        }
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}

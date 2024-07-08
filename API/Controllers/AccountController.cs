using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entity;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using API.data_tranfer;
using API.Interface;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ItokenService _tokenService;

        public AccountController(DataContext context,ItokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("register")] //POST: api/account/register

        public async Task<ActionResult<UserDto>> Register(RegisterDTO userDTO)
        {
            if (await UserExists(userDTO.Username))
                return BadRequest(new { message = "User already exists" });

            if (await EmailExists(userDTO.Email))
                return BadRequest(new { message = "Email already exists" });

            using var hmac = new HMACSHA512();

            var user = new AppUsers
            {
                UserName = userDTO.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password)),
                PassworSalt = hmac.Key,
                Email = userDTO.Email

            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return new UserDto
            {
                Username = user.UserName,
                
                Token = _tokenService.CreateToken(user)
            };
        }

        [HttpPost ("login")]

        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            if (user == null) return Unauthorized(new { message = "Invalid username or password" });

            using var hmac = new HMACSHA512(user.PassworSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
             for(int i =0; i< computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                    return Unauthorized(new { message = "Invalid username or password" });
            }
            try
            {
                return new UserDto
                {
                    Username = user.UserName,
                    Token = _tokenService.CreateToken(user)
                };
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");

                // Return an error response to the client
                return StatusCode(500, "An unexpected error occurred. Please try again later.");

            }
        }
      
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
        private async Task<bool> EmailExists(string email)
        {
            return await _context.Users.AnyAsync(x => x.Email == email.ToLower());
        }
    }
}

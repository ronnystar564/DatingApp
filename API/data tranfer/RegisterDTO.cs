using System.ComponentModel.DataAnnotations;

namespace API.data_tranfer
{
    public class RegisterDTO
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        
        public string Email { get; set; }
    }
}

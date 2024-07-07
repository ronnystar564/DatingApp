using System.ComponentModel.DataAnnotations;

namespace API.Entity
{
    public class AppUsers
    {
        public int id { get; set; }

        [Required]
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PassworSalt { get; set; }

        public string Email { get; set; }





    }
}

using System.ComponentModel.DataAnnotations.Schema;
using API.Extensions;

namespace API.Entity
{
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; } 
        public required string URL { get; set; }

        public bool IsMain { get; set; }

        public string PublicId { get; set; }
        public int AppUserID { get; set; }
        public AppUsers AppUser { get; set; } = null!;


    }
}

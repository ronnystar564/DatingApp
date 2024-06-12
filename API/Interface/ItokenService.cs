using API.Entity;
using Microsoft.EntityFrameworkCore.Query;

namespace API.Interface
{
   
    public interface ItokenService
    {
        string CreateToken(AppUsers users);
    }
}

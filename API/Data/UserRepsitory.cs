using API.Entity;
using API.Interface;
using Microsoft.EntityFrameworkCore;


namespace API.Data
{
    public class UserRepository(DataContext context) : Iuser
    {
        public async Task<AppUsers> GetUserByIdAsync(int id)
        {
            return await context.Users.FindAsync(id);
        }

        public async Task<AppUsers> GetUserByUsernameAsync(string name)
        {
           return await context.Users.SingleOrDefaultAsync(x => x.UserName == name);
        }

        public async Task<IEnumerable<AppUsers>> GetUsersAsync()
        {
            return await context.Users.ToListAsync();
        }

        public async Task<bool> SaveAllsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void Update(AppUsers user)
        {
            context.Entry(user).State = EntityState.Modified;
        }
    }
}
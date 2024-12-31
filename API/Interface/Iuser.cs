using API.Entity;

namespace API.Interface
{
    public interface Iuser
    {
        void Update(AppUsers user);
        Task<bool> SaveAllsync();

        Task<IEnumerable<AppUsers>> GetUsersAsync();
        Task<AppUsers> GetUserByIdAsync(int id);
        Task<AppUsers> GetUserByUsernameAsync(string name);

    }
}

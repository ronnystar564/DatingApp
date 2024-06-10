namespace API.Entity
{
    public class AppUsers
    {
        public int id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PassworSalt { get; set; }





    }
}

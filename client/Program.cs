namespace client
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();
            app.UseStaticFiles();

            app.MapFallbackToFile("index.html"); // Support Angular routing

            app.Run();
        }
    }
}
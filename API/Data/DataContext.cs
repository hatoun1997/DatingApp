using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions option) : base(option)//constructor
        { }
        public DbSet<AppUser> Users { get; set; }//اسم الجدول Users


    }
}
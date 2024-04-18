

using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class EdunovaContext:DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> options) 
            : base(options) { 

        }

        public DbSet<Dnevnik_kalorija> Dnevnici_kalorija { get; set; }

        public DbSet<Korisnik> Korisnici { get; set; }
        
    }
}

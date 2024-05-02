

using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;


namespace Backend.Data
{
    public class EdunovaContext:DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> options) 
            : base(options) { 

        }

        public DbSet<Dnevnik_kalorija> Dnevnici_kalorija { get; set; }

        public DbSet<Korisnik> Korisnici { get; set; }

        public DbSet<Obrok> Obroci {  get; set; }
        
    }
    //protected override void OnModelCreating(ModelBuilder modelBuilder)
    //{

    //    // implementacija veze 1:n
    //    modelBuilder.Entity<Korisnik>().HasOne(g => g.Korisnik_);
    //    modelBuilder.Entity<Korisnik>().HasOne(g => g.Korinsik_);

       

    //}
}


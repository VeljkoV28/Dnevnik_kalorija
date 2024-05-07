

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

        public DbSet<Operater> Operateri { get; set; }
        
    }
    //protected override void OnModelCreating(ModelBuilder modelBuilder)
    //{

       
    //    modelBuilder.Entity<Obrok>().HasOne(m => m.Korisnik_);
    //    modelBuilder.Entity<Dnevnik_kalorija>().HasOne(n => n.Korisnik_);



    //}
}


namespace Backend.Models
{
    public class Dnevnik_kalorija:Entitet
    {
        private required Korisnik korisnik;

        public string? Vrsta_aktivnosti { get; set; }

        public int? Potroseno_kalorija { get; set; }

        public virtual required Korisnik Korisnik { get; set; }
    }
}

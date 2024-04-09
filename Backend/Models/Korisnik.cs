namespace Backend.Models
{
    public class Korisnik : Entitet
    {
        public string? Korisnicko_ime {  get; set; }
        public int? Visina { get; set; }

        public int? Trenutna_tezina { get; set;}

        public int? Zeljena_tezina { get; set;}

        public virtual ICollection<Dnevnik_kalorija> Dnevnici_kalorija { get; set; }

    }
}

﻿namespace Backend.Models
{
    public class Dnevnik_kalorija:Entitet
    {
        
        public string? Vrsta_aktivnosti { get; set; }

        public int? Potroseno_kalorija { get; set; }

        public int? Korisnik { get; set; }
    }
}

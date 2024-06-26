﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Dnevnik_kalorija:Entitet
    {
        public string? Vrsta_aktivnosti { get; set; }

        public int? Potroseno_kalorija { get; set; }

        public int? Uneseno_kalorija { get; set; }
        
        [ForeignKey("Korisnik")]
        public required Korisnik? Korisnik_ { get; set; }
    }
}

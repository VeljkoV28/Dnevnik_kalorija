
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Text.Json.Serialization;


namespace Backend.Models

      








{
    public record KorisnikDTORead(int Sifra, string? Korisnicko_ime, int? Visina,
        int? Trenutna_tezina, int? Zeljenja_tezina);

    public record KorisnikDTOInsertUpdate([Required(ErrorMessage = "Korisnicko ime obavezno")]
        string? Korisnicko_ime,
        [Required(ErrorMessage = "Visina obavezna")]
        int? Visina,
        [Required(ErrorMessage = "Trenutna tezina obavezna")]
        int? Trenutna_tezina,
        [Required(ErrorMessage = "Zeljena tezina obavezna")]
        int? Zeljena_tezina);

    public record Dnevnik_kalorijaDTORead(int Sifra, string? Vrsta_Aktivnosti, int? Potroseno_kalorija);

    public record Dnevnik_kalorijaDTOInsertUpdate(
        [Required(ErrorMessage = "Obavezna vrsta aktivnosti")]
        string? Vrsta_Aktivnosti,
        [Required(ErrorMessage = "Obavezna koliko je kalorija potroseno")]
        int? Potroseno_kaorija,
        int? Korisnik_);


    public record ObrokDTORead(int Sifra, int? Porcija, int? Uneseno_kalorija);

    public record ObrokDTOInsertUpdate(
        [Required(ErrorMessage = "Obavezna kolicina porcija")]
        int? Porcija,
        [Required(ErrorMessage = "Obavezna koliko je kalorija uneseno")]
        int? Uneseno_kalorija,
        int? KorisnikID);













}

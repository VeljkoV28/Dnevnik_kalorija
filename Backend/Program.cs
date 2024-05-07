using Backend.Data;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();



// Dodavanje baze podataka
builder.Services.AddDbContext<EdunovaContext>(o => {
    o.UseSqlServer(builder.Configuration.GetConnectionString("EdunovaContext"));
});

// SECURITY






// END SECURITY




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(o =>
    {
        o.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.None);
        o.EnableTryItOutByDefault();
    });
    //}

    app.UseHttpsRedirection();

    // SECURITY

    app.UseAuthorization();
    // ENDSECURITY

    app.MapControllers();

    app.UseCors("CorsPolicy");

    // za potrebe produkcije
    app.UseStaticFiles();
    app.UseDefaultFiles();
    app.MapFallbackToFile("index.html");
    // zavr�io za potrebe produkcije

    app.Run();
}

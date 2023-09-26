using Pokedex.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<UserService> ();
builder.Services.AddSingleton<List<User>> ();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ClientPermission", policy => {
        policy.AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("https://localhost:7132")
        .WithOrigins("https://localhost:44459")
        .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("ClientPermission");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

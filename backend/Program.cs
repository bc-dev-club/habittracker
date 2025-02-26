using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;
using backend.Data;

var builder = WebApplication.CreateBuilder(args);

var mysqlHost = builder.Configuration["MYSQL_HOST"];
var mysqlUser = builder.Configuration["MYSQL_USER"];
var mysqlPassword = builder.Configuration["MYSQL_PASSWORD"];
var mysqlDatabase = builder.Configuration["MYSQL_DATABASE"];

var connectionString = $"server={mysqlHost};port=3306;database={mysqlDatabase};user={mysqlUser};password={mysqlPassword};";

builder.Services.AddDbContext<HabitTrackerDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.Run();

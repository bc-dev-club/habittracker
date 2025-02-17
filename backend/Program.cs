var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

app.UsePathBase("/api");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/health", () => 
{
    return "OK";
}).WithName("HealthCheck");

app.MapGet("/todos", () =>
{
    var todos = Enumerable.Range(1, 5).Select(index =>
        new Todo(
            index,
            index % 2 == 0 ? "Buy groceries" : "Finish the project",
            index % 2 == 0 ? true : false
        )
    ).ToArray();
    return todos;
})
.WithName("GetTodos");

app.MapGet("/todos/{id}", (int id) =>
{
    var todo = new Todo(id, "Other Todo", false);
    return todo;
})
.WithName("GetTodoById");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

record Todo(int Id, string Title, bool Completed);
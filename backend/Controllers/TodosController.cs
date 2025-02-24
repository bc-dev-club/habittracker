using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly string[] titles = new[]
        {
            "Buy groceries", "Finish the project", "Buy groceries", "Finish the project", "Buy groceries", "Finish the project"
        };

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return Enumerable.Range(1, 5).Select(index =>
                new Todo(
                    index,
                    titles[index]
                ))
                .ToArray();
        }

        [HttpGet("dbtest")]
        public async Task<IActionResult> DbTest([FromServices] HabitTrackerDbContext dbContext)
        {
            bool canConnect = await dbContext.Database.CanConnectAsync();
            return Ok(canConnect ? "Database connection successful!" : "Database connection failed.");
        }
    }
}
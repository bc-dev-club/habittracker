using Microsoft.AspNetCore.Mvc;
using backend.Models;

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
    }
}

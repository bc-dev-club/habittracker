using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GoalsController : ControllerBase
    {
        private readonly HabitTrackerDbContext _dbContext;

        public GoalsController(HabitTrackerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/goals?status=active&status=completed
        // クエリパラメータに指定されたstatusをもとにDBからGoalを取得する
        [HttpGet]
        public IEnumerable<Goal> Get([FromQuery] List<string>? status)
        {
            // TODO: ユーザーIDを取得する処理を実装する
            return _dbContext.Goals
                .Where(g => g.UserId == 1)
                .Where(g => status == null || status.Count == 0 || status.Contains(g.Status))
                .ToList();
        }
    }
}

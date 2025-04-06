namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }

        public List<Goal> Goals { get; set; } = [];
    };
}

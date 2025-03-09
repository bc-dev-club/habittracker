namespace backend.Models
{
    public class Goal
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public int TargetValue { get; set; }
        public required string MeasurementUnit { get; set; }
        public required string TargetPeriod { get; set; }
        public DateOnly StartsAt { get; set; }
        public DateOnly EndsAt { get; set; }
        public required string Status { get; set; }

        public int UserId { get; set; }
        public User? User { get; set; }
    };
}

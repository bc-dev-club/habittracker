using backend.Models;
using Microsoft.EntityFrameworkCore;

public static class SeedDataExtensions {
    public static void SeedData(this ModelBuilder modelBuilder) {
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1 },
            new User { Id = 2 },
            new User { Id = 3 }
        );

        modelBuilder.Entity<Goal>().HasData(
            new Goal { Id = 1, Title = "Goal 1", TargetValue = 10, MeasurementUnit = "kg", TargetPeriod = "monthly", StartsAt = new DateOnly(2025, 3, 9), EndsAt = new DateOnly(2025, 4, 8), Status = "active", UserId = 1 },
            new Goal { Id = 2, Title = "Goal 2", TargetValue = 20, MeasurementUnit = "kg", TargetPeriod = "weekly", StartsAt = new DateOnly(2025, 1, 1), EndsAt = new DateOnly(2025, 1, 6), Status = "completed", UserId = 1},
            new Goal { Id = 3, Title = "Goal 3", TargetValue = 30, MeasurementUnit = "kg", TargetPeriod = "monthly", StartsAt = new DateOnly(2025, 3, 9), EndsAt = new DateOnly(2025, 4, 8), Status = "active", UserId = 2},
            new Goal { Id = 4, Title = "Goal 4", TargetValue = 40, MeasurementUnit = "kg", TargetPeriod = "weekly", StartsAt = new DateOnly(2025, 1, 1), EndsAt = new DateOnly(2025, 1, 6), Status = "completed", UserId = 2},
            new Goal { Id = 5, Title = "Goal 5", TargetValue = 50, MeasurementUnit = "kg", TargetPeriod = "weekly", StartsAt = new DateOnly(2025, 1, 1), EndsAt = new DateOnly(2025, 1, 6), Status = "abandon", UserId = 2}
        );
    }
}
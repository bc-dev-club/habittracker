using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class addseeds : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                column: "Id",
                values: new object[]
                {
                    1,
                    2,
                    3
                });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "Id", "EndsAt", "MeasurementUnit", "StartsAt", "Status", "TargetPeriod", "TargetValue", "Title", "UserId" },
                values: new object[,]
                {
                    { 1, new DateOnly(2025, 4, 8), "kg", new DateOnly(2025, 3, 9), "active", "monthly", 10, "Goal 1", 1 },
                    { 2, new DateOnly(2025, 1, 6), "kg", new DateOnly(2025, 1, 1), "completed", "weekly", 20, "Goal 2", 1 },
                    { 3, new DateOnly(2025, 4, 8), "kg", new DateOnly(2025, 3, 9), "active", "monthly", 30, "Goal 3", 2 },
                    { 4, new DateOnly(2025, 1, 6), "kg", new DateOnly(2025, 1, 1), "completed", "weekly", 40, "Goal 4", 2 },
                    { 5, new DateOnly(2025, 1, 6), "kg", new DateOnly(2025, 1, 1), "abandon", "weekly", 50, "Goal 5", 2 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}

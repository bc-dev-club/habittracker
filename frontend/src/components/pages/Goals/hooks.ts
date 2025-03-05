import { useEffect, useState } from "react";
import * as types from "types";

export const useGoals = () => {
  const [goals, setGoals] = useState<types.Goal[]>([]);
  const [activeGoal, setActiveGoal] = useState<types.Goal>();

  const fetchGoals = async () => {
    // const response = await fetch("http://localhost:8080/api/goals");
    // const data = await response.json();
    const data: types.Goal[] = [
      { id: 2, title: "目標1" },
      { id: 3, title: "目標2" },
      { id: 4, title: "目標3" },
    ];
    setGoals(data);
  };
  const fetchActiveGoal = async () => {
    // const response = await fetch("http://localhost:8080/api/goals/active");
    // const data = await response.json();
    const data: types.Goal = { id: 1, title: "アクティブ目標1" };
    setActiveGoal(data);
  };

  useEffect(() => {
    fetchGoals();
    fetchActiveGoal();
  }, []);

  return {
    goals,
    activeGoal,
  };
};

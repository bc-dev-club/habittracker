import { useGoals } from "./hooks";
import { GoalItem } from "../../molecules/GoalItem";
import { CSSProperties } from "react";

const Styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  pageTitle: {
    textAlign: "center",
  },
  activeGoalContainer: {
    marginBottom: "50px",
  },
  goalContainerTitle: {
    color: "#787878",
    marginBottom: "16px",
  },
};

export const Goals = () => {
  const { goals, activeGoal } = useGoals();
  return (
    <>
      <div style={Styles.container}>
        <h1 style={Styles.pageTitle}>目標一覧</h1>

        {activeGoal && (
          <div style={Styles.activeGoalContainer}>
            <p style={Styles.goalContainerTitle}>アクティブ</p>
            <GoalItem key={activeGoal.id} goal={activeGoal} isFirst />
          </div>
        )}

        {goals.length !== 0 && (
          <>
            <p style={Styles.goalContainerTitle}>バックナンバー</p>
            {goals.map((goal, index) => (
              <GoalItem key={goal.id} goal={goal} isFirst={index === 0} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

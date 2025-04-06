import { CSSProperties } from "react";
import { GoalItem } from "@/components/molecules/GoalItem";
import { useGoals } from "./hooks";
import { BounceLoader } from "react-spinners";

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
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  notFound: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "30px",
    color: "#787878",
  },
};

export const Goals = () => {
  const { activeGoals, inactiveGoals, isLoading } = useGoals();

  return (
    <>
      <div style={Styles.container}>
        <h1 style={Styles.pageTitle}>目標一覧</h1>

        {isLoading && (
          <div style={Styles.loader}>
            <BounceLoader color="#36d7b7" size={50} />
          </div>
        )}

        {!isLoading && activeGoals && activeGoals.length === 0 && (
          <p style={Styles.notFound}>アクティブな目標はありません</p>
        )}

        {!isLoading && inactiveGoals && inactiveGoals.length === 0 && (
          <p style={Styles.notFound}>バックナンバーはありません</p>
        )}

        {activeGoals && activeGoals.length !== 0 && (
          <div style={Styles.activeGoalContainer}>
            <p style={Styles.goalContainerTitle}>アクティブ</p>
            <GoalItem key={activeGoals[0].id} goal={activeGoals[0]} isFirst />
          </div>
        )}

        {inactiveGoals && inactiveGoals.length !== 0 && (
          <>
            <p style={Styles.goalContainerTitle}>バックナンバー</p>
            {inactiveGoals.map((goal, index) => (
              <GoalItem key={goal.id} goal={goal} isFirst={index === 0} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

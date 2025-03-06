import { CSSProperties } from "react";

const Styles: { [key: string]: CSSProperties } = {
  reportsTitle: {
    margin : "140px",
    fontFamily : "'Noto Sans JP', sans-serif",
    fontSize : "200%",
    textAlign : "center",
  }
};

const ReportsData = [
  {
    id : 1,
    user_id : "ponnta2845",
    target_goal_ids : {ids:[1,2]},
    period : Date.now
  },
  {
    id : 2,
    user_id : "ponnta2845",
    target_goal_ids : {ids:[1,2]},
    period : Date.now
  }
];

export const Reports = () => {
    return (
      <div>
        <h1 style={Styles.reportsTitle}>定期レポート一覧</h1>
        <ul>
        </ul>
      </div>
    );
  };
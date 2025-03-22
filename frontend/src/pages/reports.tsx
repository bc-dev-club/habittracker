import { CSSProperties } from "react";

const Styles: { [key: string]: CSSProperties } = {
  reportsTitle: {
    marginTop : "140px",
    fontFamily : "'Noto Sans JP', sans-serif",
    fontSize : "200%",
    textAlign : "center",
  },
  listitemStyle: {
    listStyleType : "none",
    paddingTop : "20px",
    paddingBottom : "20px",
    paddingRight : "200px",
    border: "1px solid",
    borderBottom: "none",
  },
  listStyle: {
    borderBottom: "1px solid",
    paddingLeft : "0px",
    marginLeft : "200px",
    marginRight : "200px",
  }
};

const ReportsData = [
  {
    id : 1,
    user_id : "ponnta2845",
    target_goal_ids : {ids:[1,2]},
    period : new Date(2025, 2),
  },
  {
    id : 2,
    user_id : "ponnta2845",
    target_goal_ids : {ids:[1,2]},
    period : new Date(2025, 3),
  }
];

const listItems = ReportsData.map((pickData) =>
  <li key={pickData.id} style={Styles.listitemStyle}> {new Date(pickData.period).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit" })}</li>
);

//warning残し
export const Reports = () => {
    return (
      <div>
        <h1 style={Styles.reportsTitle}>定期レポート一覧</h1>
        <ul style={Styles.listStyle}>{listItems}</ul>
      </div>
    );
  };
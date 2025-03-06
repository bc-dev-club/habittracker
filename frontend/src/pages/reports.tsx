import { CSSProperties } from "react";

const Styles: { [key: string]: CSSProperties } = {
  reportsTitle: {
    margin : "140px",
    fontFamily : "'Noto Sans JP', sans-serif",
    fontSize : "200%",
    textAlign : "center",
  }
};

export const Reports = () => {
    return (
      <div>
        <h1 style={Styles.reportsTitle}>定期レポート一覧</h1>
        <ul>
        </ul>
      </div>
    );
  };
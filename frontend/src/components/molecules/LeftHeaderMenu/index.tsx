import { Link } from "react-router-dom";

const Styles = {
  leftHeaderMenu: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  nav: {
    padding: "10px",
    textDecoration: "none",
    color: "inherit",
  },
};

export const LeftHeaderMenu = () => {
  return (
    <div style={Styles.leftHeaderMenu}>
      <Link to="/" style={Styles.nav}>
        ホーム
      </Link>
      <Link to="/" style={Styles.nav}>
        目標一覧
      </Link>
      <Link to="/" style={Styles.nav}>
        定期レポート一覧
      </Link>
    </div>
  );
};

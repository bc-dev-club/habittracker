import { Link } from "react-router-dom";

const Styles = {
  leftHeaderMenu: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    padding: "10px",
    textDecoration: "none",
    color: "inherit",
  },
};

export const LeftHeaderMenu = () => {
  return (
    <nav style={Styles.leftHeaderMenu}>
      <Link to="/" style={Styles.navLink}>
        ホーム
      </Link>
      <Link to="/" style={Styles.navLink}>
        目標一覧
      </Link>
      <Link to="/" style={Styles.navLink}>
        定期レポート一覧
      </Link>
    </nav>
  );
};

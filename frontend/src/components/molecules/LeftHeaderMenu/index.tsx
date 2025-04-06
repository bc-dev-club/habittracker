import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const Styles: { [key: string]: CSSProperties } = {
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

const navItems: { text: string; link: string }[] = [
  { text: "ホーム", link: "/" },
  { text: "目標一覧", link: "/goals" },
  { text: "定期レポート一覧", link: "/" },
];

export const LeftHeaderMenu = () => {
  return (
    <nav style={Styles.leftHeaderMenu}>
      {navItems.map((item, index) => (
        <Link key={index} to={item.link} style={Styles.navLink}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

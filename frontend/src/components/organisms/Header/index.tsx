import { CSSProperties } from "react";
import { LeftHeaderMenu } from "../../molecules/LeftHeaderMenu";
import { RightHeaderMenu } from "../../molecules/RightHeaderMenu";

const Styles: { [key: string]: CSSProperties } = {
  header: {
    height: "80px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    paddingInline: "10px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    zIndex: 100,
  },
};

const Header = () => {
  return (
    <header style={Styles.header}>
      <LeftHeaderMenu />
      <RightHeaderMenu />
    </header>
  );
};

export { Header };

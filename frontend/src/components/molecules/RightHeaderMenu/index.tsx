import { CSSProperties } from "react";
import HeaderMenuClosedIcon from "../../../assets/HeaderMenuClosedIcon.svg";
import { useRightHeaderMenu } from "./hooks";
import HeaderMenuOpenedIcon from "../../../assets/HeaderMenuOpenedIcon.svg";
import { Link } from "react-router-dom";

const Styles: { [key: string]: CSSProperties } = {
  rightHeaderMenu: {
    position: "relative",
  },
  headerMenuButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px",
    border: "none",
    color: "#333333",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  headerMenuIcon: {
    width: "26px",
    height: "16px",
  },
  headerMenu: {
    position: "absolute",
    width: "max-content",
    top: "100%",
    right: "0",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E8E8E8",
    textAlign: "center",
  },
  headerMenuItemButton: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "transparent",
    color: "inherit",
    cursor: "pointer",
    textDecoration: "none",
  },
};

export const RightHeaderMenu = () => {
  const { isMenuOpen, handleMenuOpen, handleMenuClose, username } =
    useRightHeaderMenu();

  return (
    <div style={Styles.rightHeaderMenu}>
      <button
        style={Styles.headerMenuButton}
        onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
      >
        {username}
        <img
          src={isMenuOpen ? HeaderMenuOpenedIcon : HeaderMenuClosedIcon}
          alt=""
          style={Styles.headerMenuIcon}
        />
      </button>
      {isMenuOpen && (
        <div style={Styles.headerMenu}>
          <Link
            to="/"
            style={Styles.headerMenuItemButton}
            onClick={handleMenuClose}
          >
            ユーザ設定
          </Link>
          <button style={Styles.headerMenuItemButton} onClick={handleMenuClose}>
            ログアウト
          </button>
        </div>
      )}
    </div>
  );
};

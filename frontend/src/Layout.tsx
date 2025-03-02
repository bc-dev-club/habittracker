import { Outlet } from "react-router-dom";
import { Header } from "./components/organisms/Header";
import { CSSProperties } from "react";

const Styles: { [key: string]: CSSProperties } = {
  main: {
    marginTop: "80px",
  },
};

export const Layout = () => {
  return (
    <div>
      <Header />
      <main style={Styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

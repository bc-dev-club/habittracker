import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { _Signin } from "./pages/Signin";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: ログイン後画面でのみLayoutを出すように修正 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Signin" index element={<_Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

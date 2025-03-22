import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { _Signin } from "./pages/Signin";
import { _Register } from "./pages/Register";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: ログイン後画面でのみLayoutを出すように修正 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Signin" element={<_Signin />} />
          <Route path="Register" element={<_Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

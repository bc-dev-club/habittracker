import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { Reports } from "./pages/reports";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: ログイン後画面でのみLayoutを出すように修正 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reports" element={<Reports />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

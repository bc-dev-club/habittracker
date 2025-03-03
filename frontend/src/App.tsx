import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { Goal } from "./pages/Goal";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: ログイン後画面でのみLayoutを出すように修正 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="goal" element={<Goal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

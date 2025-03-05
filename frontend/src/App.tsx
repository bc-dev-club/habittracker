import { BrowserRouter, Routes, Route } from "react-router-dom";

import { _Home } from "@/pages/Home";
import { Layout } from "@/Layout";
import { _Goals } from "@/pages/Goals";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: ログイン後画面でのみLayoutを出すように修正 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<_Home />} />
          <Route path="goals" element={<_Goals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

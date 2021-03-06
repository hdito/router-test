import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./Test.jsx";
import App from "./App.jsx";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="test1" element={<Test title="Test 1" />} />
          <Route path="test2" element={<Test title="Test 2" />} />
          <Route path="test3" element={<Test title="Test 3" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

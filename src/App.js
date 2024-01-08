import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ErrorPage />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

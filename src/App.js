import { BrowserRouter, Route, Routes } from "react-router-dom";

import GeneralContext from "./contexts/GeneralContext";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";

function App() {
  return (
    <GeneralContext.Provider value={{
      global: "Contexto Global",
      teste: "Teste"
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;

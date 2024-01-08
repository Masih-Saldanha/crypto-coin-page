import { BrowserRouter, Route, Routes } from "react-router-dom";

import GeneralContext from "./contexts/GeneralContext";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";
import { useMemo } from "react";

function App() {
  const contextValue = useMemo(() => ({
    global: "Contexto Global",
    teste: "Teste"
  }), []);

  return (
    <GeneralContext.Provider value={contextValue}>
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

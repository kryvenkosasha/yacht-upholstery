import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import OfertaPage from "./Pages/OfertaPage/OfertaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/oferta" element={<OfertaPage />}></Route>
        <Route path="/roboty" element={<h1>WORKS PAGE</h1>}></Route>
        <Route path="*" element={<h1>TA STRONA NIE ISTNIEJE</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

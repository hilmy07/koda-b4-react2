import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

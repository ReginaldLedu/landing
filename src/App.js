import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { UserSearch } from "./pages/UserSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSearch />} />
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;

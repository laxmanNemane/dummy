import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import MainContent from "./Layout/MainContent";
import FormPage from "./Pages/FormPage";
import SelectionPage from "./Pages/SelectionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainContent />}>
          <Route path="/" element={<SelectionPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

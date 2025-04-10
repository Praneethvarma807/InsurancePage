import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsurancePage from "./insurancePage"; 
import InsuranceFormPage0 from "./assets/components/InsuranceFormPage0";
import InsuranceFormPage1 from "./assets/components/InsuranceFormPage1";
import InsuranceFormPage2 from "./assets/components/InsuranceFormPage2";
import InsuranceFormPage3 from "./assets/components/InsuranceFormPage3";
import Pagination from "./assets/components/Pagination";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<InsurancePage />} />
        <Route path="/formpage0" element={<InsuranceFormPage0 />} />
        <Route path="/form1" element={<InsuranceFormPage1 />} />
        <Route path="/form2" element={<InsuranceFormPage2 />} />
        <Route path="/form3" element={<InsuranceFormPage3 />} />
      </Routes>
    </Router>
  );
};

export default App;

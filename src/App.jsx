import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsurancePage from "./insurancePage";
import InsuranceFormPage1 from "./assets/components/InsuranceFormPage1";

import InsuranceFormPage2 from "./assets/components/InsuranceFormPage2";
import InsuranceFormPage3 from "./assets/components/InsuranceFormPage3";
import Pagination from "./assets/components/Pagination";

const App = () => {
  return (
    <>
    <InsurancePage />
    {/* <InsuranceFormPage3 /> */}
    
    </>
  );
};

export default App;

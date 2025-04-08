import React, { useState } from "react";
import "./insurance.css";
import "./insuranceFormpages.css";

import FormPage0 from "./components/insuranceFormPage0";
import FormPage1 from "./components/insuranceFormPage1";
import FormPage2 from "./components/insuranceFormPage2";
import FormPage3 from "./components/insuranceFormPage3";
import MainHeader from "./header";
import Fotter from "./assets/components/fotter";

const Insurance = () => {
    const [page, setPage] = useState(0);

    const renderPage = () => {
        switch (page) {
            case 0:
                return <FormPage0 />;
            case 1:
                return <FormPage1 />;
            case 2:
                return <FormPage2 />;
            case 3:
                return <FormPage3 />;
            default:
                return <FormPage0 />;
        }
    };

    return (
        <>
            <MainHeader />
            <div className="Insurancecontainer">
                {renderPage()}
                <div className="pagination-buttons">
                    <button 
                        onClick={() => setPage(prev => Math.max(prev - 1, 0))} 
                        disabled={page === 0}>
                        Back
                    </button>
                    <button 
                        onClick={() => setPage(prev => Math.min(prev + 1, 3))} 
                        disabled={page === 3}>
                        Next
                    </button>
                </div>
            </div>
            <Fotter value="1200px" />
        </>
    );
};

export default Insurance;

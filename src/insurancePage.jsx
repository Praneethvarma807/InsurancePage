import React, { useState } from "react";
import "./insurancePage.css";
import "./insuranceFormpages.css";
import { FaChevronDown } from "react-icons/fa";
import FormPage0 from "../src/assets/components/InsuranceFormPage0";
import FormPage1 from "../src/assets/components/InsuranceFormPage1";
import FormPage2 from "../src/assets/components/InsuranceFormPage2";
import FormPage3 from "../src/assets/components/InsuranceFormPage3";
import insuranceImg from './assets/Images/insurancePage/insurancefirstpageimage1.jpg';
import RegularInsuranceImg from "../src/assets/Images/insurancePage/microInsuranceImg.png";
import MicroInsuranceImg from "../src/assets/Images/insurancePage/microInsuranceImg.png";

const Insurance = () => {
  const [showForm, setShowForm] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleInsuranceType = () => {
    setShowForm(true);
  };

  return (
    <>
      {!showForm ? (
        <div className="mainInsurance-container">
          {/* Insurance Navigation */}
          <nav className="mainInsurance-nav">
            <div className="mainInsurance-nav-div1">
              <h4>
                VDr <br /> Insurance
              </h4>
              <p>with you always</p>
            </div>
            <div className="mainInsurance-nav-div2">
              <ul>
                {/* Personal Dropdown */}
                <li
                  className="dropdown"
                  onMouseEnter={() => setDropdown("personal")}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <a href="#">
                    Personal <FaChevronDown className="dropdown-icon" />
                  </a>
                  {dropdown === "personal" && (
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Protect My Family</a>
                      </li>
                      <li>
                        <a href="#">Create Wealth</a>
                      </li>
                      <li>
                        <a href="#">Plans for Children's Future</a>
                      </li>
                      <li>
                        <a href="#">Have Health Cover</a>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Business Dropdown */}
                <li
                  className="dropdown"
                  onMouseEnter={() => setDropdown("business")}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <a href="#">
                    Business <FaChevronDown className="dropdown-icon" />
                  </a>
                  {dropdown === "business" && (
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Prospective</a>
                      </li>
                      <li>
                        <a href="#">Existing Policy Holder</a>
                      </li>
                      <li>
                        <a href="#">An NRI</a>
                      </li>
                      <li>
                        <a href="#">An Agent</a>
                      </li>
                      <li>
                        <a href="#">Retired Employee</a>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <a href="#">Renewal</a>
                </li>
                <li>
                  <a href="#">Claim</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="mainInsurance-nav-div3">My Policy</div>
          </nav>

          {/* Insurance Content */}
          <div className="mainInsurance-div">
            <div className="mainInsurance-div-imgdiv">
              <img src={insuranceImg} alt="Insurance Banner" />
            </div>
            <div className="mainInsurance-div-uldiv">
              <ul className="mainInsurance-div-uldiv-ul">
                <li>
                  <p>
                    For details, Contact your nearest VDr Insurance Branch
                    Office.
                  </p>
                </li>
                <li>
                  <ul className="mainInsurance-div-uldiv-ul-ul">
                    <li>
                      <p>
                        <b>Follow Us:</b>
                      </p>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Google</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Email: Info@hiscope.com</h4>
                </li>
                <li>
                  <p>
                    <b>Visit Us:</b> Prashanthi Hills Meerpet, Hyderabad, India
                  </p>
                </li>
                <li>
                  <p>
                    <b>Call Us: 123456789</b> <br />
                    Our team is available Monday to Friday, from 9 AM to 5 PM.
                  </p>
                </li>
                <li>
                  <button
                    className="mainInsurance-div-uldiv-ul-btn"
                    onClick={handleInsuranceType}
                  >
                    CLICK HERE <br /> TO APPLY
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Insurance Selection */}
          <div className="mainInsurance-div1">
            <p>
              <b>"Start Your Journey to Protection Today!"</b>
              <br /> "It’s easy, quick, and tailored for you—start your
              protection journey now."
            </p>
            <p className="mainInsurance-div1-p">Select your insurance</p>
          </div>

          <div className="mainInsurance-div2">
            <ul>
              <li>
                <h5>Regular Insurance</h5>
                <div className="mainInsurance-div2-div-img">
                  <img src={RegularInsuranceImg} alt="Regular Insurance" />
                </div>
                <h4>"Secure your future today, for peace of mind tomorrow."</h4>
                <div className="mainInsurance-div2-div-p">
                  <p>
                    Regular insurance ensures you’re covered against unexpected
                    events, giving you financial security for whatever comes
                    your way.
                    <a href="#"> Read More...</a>
                  </p>
                  <button
                    className="mainInsurance-div2-div2-btn"
                    onClick={handleInsuranceType}
                  >
                    CLICK HERE <br /> TO APPLY
                  </button>
                </div>
              </li>
              <li>
                <h5>Micro Insurance</h5>
                <div className="mainInsurance-div2-div-img">
                  {" "}
                  <img src={MicroInsuranceImg} alt="MicroInsuranceImg" />{" "}
                </div>
                <h4>
                  "A little insurance goes a long way—start small, feel secure."
                </h4>
                <div className="mainInsurance-div2-div-p">
                  <p>
                    Micro insurance offers small, affordable plans that provide
                    important protection without breaking the bank.{" "}
                    <a href="">Read More...</a>
                  </p>
                  <button
                    className="mainInsurance-div2-div2-btn"
                    onClick={handleInsuranceType}
                  >
                    CLICK HERE <br />
                    TO APPLY
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <FormPage0 />
      )}
    </>
  );
};

export default Insurance;

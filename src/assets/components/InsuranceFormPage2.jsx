import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/form3"); // Navigate to InsuranceFormPage1
  };
  return (
    <div className='insurancefrompage2-div'>
      <div className='insurancefrompage2-div1'>
        <h3>Hurray, You have unlocked the best Quote</h3>
        <p>Please review and save the quote to proceed to Proposal</p>
      </div>

      <div className='insurancefrompage2-div2'>
        <h3 className='insurancefrompage2-div2-h3_1'>Personal Information</h3>
        <ul className='insurancefrompage2-div2-h3_1-ul1'>
        <li>
          <h4>Residential Status <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Date Of Birth <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Gender <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
        </ul>
        <h3 className='insurancefrompage2-div2-h3_2'>Product Information</h3>
        <ul className='insurancefrompage2-div2-h3_1-ul2'>
        <li>
          <h4>Plan Number <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Sum Assured <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Installment Premium <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Policy Term <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
        </ul>

        <ul className='insurancefrompage2-div2-h3_1-ul3'>
        <li>
          <h4>Premium Paying Term <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Premium paying Mode <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Age <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Date Commencment <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
        </ul>

      </div>

      <div  className='insurancefrompage2-div3'>

        <ul  className='insurancefrompage2-div3-ul1'>
          <li>
          <h6>Yearly Premium <br />6,000.00/-</h6>
          </li>
          <li>
            <h6>Half Yearly Premium <br />3,000.00/-</h6>
          </li>
        </ul>
        <ul  className='insurancefrompage2-div3-ul1'>
          <li>
          <h6>Quaterly Premium <br />6,000.00/-</h6>
          </li>
          <li>
            <h6>Monthly Premium <br />3,000.00/-</h6>
          </li>
        </ul>

      </div>
      
      <p className='pagecount'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>


       {/* Submit Button */}
       <div className="form-submit-div1">
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FormPage2;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/form3"); 
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
          <select required>
          <option value="">Select</option>
  <option value="Own">Owned</option>
  <option value="Rent">Rented</option>
</select>
          </li>
          <li>
          <h4>Date Of Birth <p>*</p></h4>
          <input type="date"  placeholder='Enter Date Of Birth' required/>
          </li>
          <li className="gender-li2">
                <div cl>
                  <label htmlFor="gender">Gender:</label>
                  <li className="gender-input-li2">
                    <input type="radio" id="gender" name="gender" required />
                    Male
                  </li>
                  <li className="gender-input-li2">
                    <input type="radio" id="gender" name="gender" required />
                    Female
                  </li>
                  <li className="gender-input-li2">
                    <input type="radio" id="gender" name="gender" required />
                    Others
                  </li>
                </div>
              </li>
        </ul>
        <h3 className='insurancefrompage2-div2-h3_2'>Product Information</h3>
        <ul className='insurancefrompage2-div2-h3_1-ul2'>
        <li>
          <h4>Plan Number <p>*</p></h4>
          <input type="text"  placeholder='Enter Plan Number' required/>
          </li>
          <li>
          <h4>Sum Assured <p>*</p></h4>
          <input type="text"  placeholder='Enter Sum Asuured' required/>
          </li>
          <li>
          <h4>Installment Premium <p>*</p></h4>
            <select required>
            <option value="">Select Payment Frequency</option>
  <option value="Monthly">Monthly</option>
  <option value="Quarterly">Quarterly</option>
  <option value="Half-Yearly">Half-Yearly</option>
  <option value="Annually">Annually</option>
</select>
          </li>
          <li>
          <h4>Policy Term <p>*</p></h4>
            <select required>
            <option value="">Select Policy Term</option>
  <option value="5">5 Years</option>
  <option value="10">10 Years</option>
  <option value="15">15 Years</option>
  <option value="20">20 Years</option>
</select>
          </li>
        </ul>

        <ul className='insurancefrompage2-div2-h3_1-ul3'>
        <li>
          <h4>Premium Paying Term <p>*</p></h4>
            <select required>
            <option value="">Select Premium Paying Term</option>
  <option value="5">5 Years</option>
  <option value="10">10 Years</option>
  <option value="15">15 Years</option>
  <option value="20">20 Years</option>
  <option value="Single">Single Premium</option>
</select>
          </li>
          <li>
          <h4>Premium paying Mode <p>*</p></h4>
          <select required>
          <option value="">Select Premium Paying Mode</option>
  <option value="Monthly">Monthly</option>
  <option value="Quarterly">Quarterly</option>
  <option value="Half-Yearly">Half-Yearly</option>
  <option value="Annually">Annually</option>
  <option value="Single Premium">Single Premium</option>
</select>


          </li>
          <li>
          <h4>Age <p>*</p></h4>
          <input type="date"  placeholder='Enter Age' required/>
          </li>
          <li>
          <h4>Date Commencment <p>*</p></h4>
          <input type="text"  placeholder='Enter Date Commencment' required/>
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
      
      <p className='pagecount-2'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>


       {/* Submit Button */}
       <div className="form-submit-div1">
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="form-submit-div-back1">
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default FormPage2;

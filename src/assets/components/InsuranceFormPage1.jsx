import React from 'react';
import { useNavigate } from 'react-router-dom';


const FormPage1 = () => {


  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/form2"); 
  };

  return (
    <div className='insurancefrompage1-div'>
      <div className='insurancefrompage1-div1'>
        <h3>Choose your needs</h3>
        <p>How much insurance cover you are looking for ?...</p>
      </div>
      <ul className='insurancefromPage1-ul'>
      <div className='insurancefrompage1-div2'>
        <ul>
          <li> <h4>Basic Sum Assured <p>*</p></h4>
          <input type="text"  placeholder='Enter Basic Sum Assured' required/>
          </li>
          <li>
          <h4>Premium Paying Term <p>*</p></h4>
          <input type="text"  placeholder='Enter Premium Paying Term ' required/>
          <a href="">What is Premium Paying Term?</a>
          </li>
        </ul>
      </div>
      <div className='insurancefrompage1-div3'>
        <ul>
          <li>
          <h4>Under NACH? <p>*</p></h4>
          <select required>
  <option value="">Select</option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>        

  <a href="">What is NACH?</a>
          </li>
          <li>
          <h4>Date of Commencement <p>*</p></h4>
          <input type="date"  placeholder='Enter Date of Commencement ' required/>
          </li>
          <li>
          <h4>Policy Term <p>*</p></h4>
          <input type="text"  placeholder='Enter Policy  Term ' required/>
          </li>
          <li>
          <h4>Preferred Mode <p>*</p></h4>
          <option value="">Select Payment Mode</option>
          <select >
  <option value="NACH">NACH (Auto-debit)</option>
  <option value="Credit Card">Credit Card</option>
  <option value="Debit Card">Debit Card</option>
  <option value="Net Banking">Net Banking</option>
  <option value="UPI">UPI</option>
  <option value="Cheque">Cheque</option>
  <option value="Cash">Cash</option>
</select>
          <a href="">What is Preferred Mode?</a>
          </li>
        </ul>
      </div>
      </ul>
      <div className='insurancefrompage1-div4'>
        {/* <img src={InsuranceImage} alt="InsuranceImage" /> */}
      </div>
      <p className='pagecount-1'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>

      <div className="form-submit-div1">
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="form-submit-div-back0">
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>

    
    
  );
};

export default FormPage1;

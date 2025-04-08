import React from 'react';


import LastpageImg from "../images/comingSoonPage/laststeps.png";


const FormPage3 = () => {
  return (
    <div>
      <div className='insuranceborder-div'>
     <div className='insurancefrompage3-div1'>
      <h2>ONE LAST STEP</h2>
      <p>Choose Rider Benefits which offer extra coverage which can be helpful in times of financial crisis</p>
     </div>
     <div className='insurancefrompage3-div2'>
      <ul>
        <li>
          <h4>Accident Benefits Reuired?<p>*</p></h4>
          <input type="text" />
          <a href="">What are this Riders?</a>
        </li>
        <li>
          <h4>ADDB Required Sum Assured?<p>*</p></h4>
          <input type="text" />
          <a href="">What is ADDB Required Sum Assured?</a>
        </li>
        </ul>
     </div>
     <div className='insurancefrompage3-div3'>
      <img src={LastpageImg} alt="final step img"  className='lastimage'/>
     </div>
      <p className='pagecount'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>
    </div>
    </div>
  );
};

export default FormPage3;

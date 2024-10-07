import React, { useRef } from 'react'

function SignupForm() {

   let msgeLabelRef = useRef();
   let stateSelectRef = useRef();
   let firstNameInputRef = useRef();
   let lastNameInputRef  = useRef();
   let maleRBRef = useRef();
   let femaleRBRef = useRef();
   let selectedGender;
   let salutation;
   let maritalStatus;
   
   let onClickSubmit = ()=>{
    if(selectedGender === "male"){
      salutation = "Mr."
    }else{
        if(maritalStatus === "single"){
       salutation = "Miss."

        }else{
            salutation = "Mrs"
        }
    }
    msgeLabelRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} from ${stateSelectRef.current.value}, your Account has been created.`;
   }

  return (
    <div>
        <h2>SignupForm</h2>
      <form>
        <div>
            <label>FirstName</label>
            <input ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>LastName</label>
            <input ref={lastNameInputRef}></input>
        </div>
        <div>
            <label>Gendre</label>
            <input type='radio' name='gender' ref={maleRBRef} onChange={()=>{
              if(maleRBRef.current.checked === true){
                 selectedGender = "male";
              }
            }}></input>
            <label className='innerLabel'>Male</label>
            <input type='radio' name='gender' ref={femaleRBRef}
            onChange={()=>{
                if(femaleRBRef.current.checked === true){
                    selectedGender = "female";
                }
            }}
            ></input>
            <label className='innerLabel'>Female</label>
        </div>
        <div>
            <label>Marital Status</label>
            <input type='radio' name='ms' onChange={(eventObj)=>{
                console.log(eventObj)
                if(eventObj.target.checked === true){
                    maritalStatus = "single"
                }

            }}></input>
            <label className='innerLabel'>Single</label>
            <input type='radio' name='ms' onChange={(eventObj)=>{
                if(eventObj.target.checked === true){
                    maritalStatus = "married"
                }
            }}></input>
            <label className='innerLabel'>Married</label>
        </div>
        <div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Password</label>
            <input></input>
        </div>
        <div>
            <label>Age</label>
            <input></input>
        </div>
        <div>
            <label>State</label>
            <select ref={stateSelectRef}>
                <option>select state</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="TS">Telangana</option>
                <option value="TN">TamilNadu</option>
                <option value="KN">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharastra</option>
                <option value="GT">Gujarat</option>
                <option value="ML">Meghalaya</option>
                <option value="NL">Nagaland</option>
                <option value="JK">Jammu&Kashmir</option>
                <option value="SK">Sikkim</option>
            </select>
        </div>

        <div>
            <button type='button' onClick={()=>{
                onClickSubmit();
            }}>Submit</button>
        </div>
        <label ref={msgeLabelRef} style={{width:"500px"}}></label>
      </form>
    </div>
  )
}

export default SignupForm

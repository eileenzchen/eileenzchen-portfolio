import React, { useEffect, useState } from 'react'
import './Verification.css'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Verification(props) {
  document.title = "Capital One — Eileen Chen";

  // document.getElementById('footer').style.display = 'none';
  
  const [isVerified, setIsVerified] = useState(false);
  // useEffect(() => {
  //   if (window.sessionStorage.getItem('verified') === 'true') {
  //     setIsVerified(true);
  //   }
  //   else {
  //     setIsVerified(false);
  //   }
  // }, [])

  function showErrorMessage() {
    const formContainer = document.getElementById('input-button-container');
    const errorMessage = document.createElement('label');
    errorMessage.innerHTML = 'Incorrect password. Please try again.';
    errorMessage.id = 'error-message';
    errorMessage.htmlFor = 'password-input';

    const input = document.getElementById('password-input');
    // @ts-ignore
    input.value = '';
    formContainer.after(errorMessage);
  }

  function checkPw(event) {
    event.preventDefault();
    // gets the current input value
    // @ts-ignore
    const answer = (document.getElementById("password-input")).value;

    if (answer === "plantmom") { 
      props.sendVerified(true);
      window.sessionStorage.setItem("verified", "true");
    } else {
      props.sendVerified(false);
      // alert("Sorry, try again.");
      showErrorMessage();
      window.sessionStorage.setItem("verified", "false");
    }
    return false;
  };

  return (
    <>
    <div className="verification-container" style={{display: props.verified ? 'none' : 'block'}}>
      <div id="lock-emoji">
        <span>🔒</span>
      </div>
      <p>This section is password protected because I'm unable to publicly share more details about this project. To read on, enter the password or shoot me a <a className="content-link" href="mailto:ezch09@gmail.com" target="_blank" rel="noopener noreferrer">message</a>!</p>
      <form onSubmit={checkPw} id="pw-form">
        {/* hidden username field for accessibility */}
        <input 
          hidden
          id="username-input" 
          name="email" 
          value=""
          autoComplete="email"
          placeholder="email"/>
        <div id="input-button-container">
          <input 
            id="password-input" 
            name="password" 
            type="password" 
            autoComplete="current-password"
            placeholder="password"
            required/>
          <button type="submit" aria-label="submit"><ArrowForwardRoundedIcon style={{paddingTop: "2px"}}/></button>
        </div>
      </form>
    </div>

    </>
    
  )

}

export default Verification

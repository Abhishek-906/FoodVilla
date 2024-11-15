import { useState , useEffect } from "react";
import * as Yup from "yup";

const SignUpForm = () => {

    useEffect(() => {
      const handleContextMenu = (event) => event.preventDefault();
      document.addEventListener("contextmenu", handleContextMenu);
  
      const handleKeyDown = (e) => {
        if (e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
            (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
          e.preventDefault();
          return false;
        }
      };
  
      document.addEventListener("keydown", handleKeyDown);
  
      return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

  return (
    <>


<div className="contact-container">
      <div className="right">
        <h1 className="title">Sign Into Account</h1>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdt4WF77ZcnmR0JLmpgvu_rw2SOsNChPPbA&s" alt="Logo" />
        <div className="form-container">
          <div className="username">
            <img className="icon email-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCD3YkcQtnJMp5Sxu_J4ftIImzvUXrpClUCA&s" style={{ width: "30px", height: "30px" }} alt="Email Icon" />
            <input type="email" className="user-input" placeholder="E-Mail" />
          </div>
          <div className="password">
            <img className="icon password-icon" src="data:image/png;base64,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" style={{ width: "30px", height: "30px" }} alt="Password Icon" />
            <input type="password" className="pass-input" placeholder="Password" />
          </div>
          <div className="keepme">
            <input type="checkbox" defaultChecked />
            Keep Me Logged In
          </div>
          <button type="submit">Go !</button>
          <a href="#" className="link">Forgot Password</a>
        </div>
      </div>
    </div>
  );


 
  </>

  );
};

export default SignUpForm;
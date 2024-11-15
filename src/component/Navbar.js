

// --------------------Project swiggy------------------------------------





import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState("SignUp");

  return (
    <div className="navbar">
      <img className="logo" src={"data:image/png;base64,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"} alt="Food Villa" />
      <ul className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/Cart">My Orders</Link>
        <Link to="/st">Show limited cards</Link>
        {!isLoggedIn && (
            <Link to="/signUp"> 
            <button 
              onClick={(e)=>{  e.target.value="LoggedIn"; setStatus("LogIn")}}
            > { status }</button>
            </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;




// --------------------------------------own swiggy---------------------------------

// import React, { useState ,useEffect} from "react";
// import { Outlet, Link } from 'react-router-dom';
// import Block from "./Block";
// function Navbar() {



//   const title = "Swiggy";

//  const abc =()=>{
//   console.log("function");
//  }
//  abc();
//   useEffect(()=>{
//     console.log("useeffect");
//   },[abc()]);
//   console.log("console");
  


//   const [loggedInUser , changeloggedInUser] = useState(true);

//   return (

//     <nav id="nv">

//       <a href="/">
//         <div>
//           <img
//             src="data:image/jpeg;base64,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"
//             width="65px"
//           ></img>
     
//         </div>
//       </a>
//   <h1>{title}</h1>

//     <div className="nav-items">
//       <ul id="lst">
//       <Link to="/">Home</Link>
//         {/* <li>About</li> */}
//         <Link to="/Aboutus">About</Link>
//         <Link to="/Contactus">Contact Us</Link>
//       </ul>

//        {(!loggedInUser ? <button className="inoutbtn" onClick={()=>
//       {changeloggedInUser(true)}
//      }>LogIN</button>: <button className="inoutbtn" onClick={()=>{
//       changeloggedInUser(false)}
//      }>LogOUT</button>)}  
//       </div>
  

//     </nav>
         
//   );
// }


// export default Navbar;








// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Till 8<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//  import React, { useState ,useEffect} from "react";

//  function Navbar() {


//    const title = "Swiggy";

//   const abc =()=>{
//    console.log("function");
//   }
//   abc();
//    useEffect(()=>{
//      console.log("useeffect");
//    },[abc()]);
//    console.log("console");
  


//    const [loggedInUser , changeloggedInUser] = useState(true);

//    return (

//      <nav id="nv">

//        <a href="/">
//          <div>
//            <img           src="data:image/jpeg;base64,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"
//              width="65px"
//            ></img>
//          </div>
//        </a>
//    <h1>{title}</h1>

//      <div className="nav-items">
//        <ul id="lst">
//          <li>Home</li>
//          <li>About</li>
//          <li>Contact Us</li>
//        </ul>

//         {(!loggedInUser ? <button className="inoutbtn" onClick={()=>
//        {changeloggedInUser(true)}
//       }>LogIN</button>: <button className="inoutbtn" onClick={()=>{
//        changeloggedInUser(false)}
//       }>LogOUT</button>)}  
//        </div>
  


//      </nav>
//    );
//  }


//  export default Navbar;



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Till 8th end<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// ----------------------------------own swiggy------------------------------


import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>            
            <h1>OOPS!! Somthing went wrong.</h1>
            <h2>{err.status + " x" + err.statueText}</h2>
        </div>
    )
}
export default Error ;
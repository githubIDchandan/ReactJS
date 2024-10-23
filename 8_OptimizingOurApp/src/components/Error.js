import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div className="errparent">
            <div className="err">
           <div className="errCard">
            <h1 className="oopsmsg">Oops!!!</h1>
            <h3 className="wmsg">Something Went Wrong!!!</h3>
            {/* <h2 className="errmsg">{err.error.message}</h2> */}
            <h3 className="errStatus">{err.status}:{err.statusText}</h3>
           </div>
            
        </div>
        </div>
    )
}

export default Error;
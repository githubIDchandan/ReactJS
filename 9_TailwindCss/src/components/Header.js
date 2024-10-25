import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [btnlogin,setBtnLogin]=useState("Login");

    // const onlineStatus =useOnlineStatus()

    return(
        <div className=" flex justify-between bg-pink-200 shadow-lg sm:bg-slate-100">
            <div>
                <img className="w-36" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    {/* <li className="p-4">Online Status: {onlineStatus===true? "🟢":"🔴"}</li> */}
                    <li className="p-4"><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About</a></li> */}
                    <li className="p-4"><Link to="/about">About</Link></li>
                    <li className="p-4"><Link to="/contact">Contact</Link></li>
                    <li className="p-4">Cart</li>
                    <li className="p-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <button className="p-2" onClick={()=>{
                        btnlogin==="Login"?setBtnLogin("Logout"):setBtnLogin("Login")
                    }}>{btnlogin}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
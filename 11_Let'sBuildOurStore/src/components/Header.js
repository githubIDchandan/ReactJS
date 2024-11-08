import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import usercontext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [btnlogin,setBtnLogin]=useState("Login");

    // const onlineStatus =useOnlineStatus();
    const {loggedInUser}= useContext(usercontext);

    const cartItem=useSelector((store)=>store.cart.items)
    

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
                    <Link to={"/cart"}><li className="p-4 font-bold">Cart({cartItem.length}items)</li></Link>
                    <li className="p-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <button className="p-2" onClick={()=>{
                        btnlogin==="Login"?setBtnLogin("Logout"):setBtnLogin("Login")
                    }}>{btnlogin}</button>
                    <li className="p-4 font-bold">({loggedInUser})</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnlogin,setBtnLogin]=useState("Login");

    return(
        <div className="footer">
            <div>
                <img className="nav-logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About</a></li> */}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="loginbtn" onClick={()=>{
                        btnlogin==="Login"?setBtnLogin("Logout"):setBtnLogin("Login")
                    }}>{btnlogin}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
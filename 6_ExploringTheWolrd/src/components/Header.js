import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header=()=>{

    const [btnlogin,setBtnLogin]=useState("Login");

    return(
        <div className="footer">
            <div>
                <img className="nav-logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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
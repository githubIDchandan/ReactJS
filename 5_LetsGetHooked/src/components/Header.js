import { LOGO_URL } from "../utils/constant";

const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;
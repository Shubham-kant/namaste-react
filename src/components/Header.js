import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    //use state variables to sync ui layer and data layer.
    //when state variables updates,component re - renders.
    const [SessionStatus,setSessionStatus] = useState('Login');
    let btnName = 'login';
    const onlineStatus = useOnlineStatus();
    console.log(SessionStatus);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="list-item">
                        Online status :  
                        {onlineStatus ? " ✅" : ' 🔴'}
                    </li>
                    <li className="list-item">Home</li>
                    <li className="list-item">
                       <a href="/about">
                        About
                        </a> </li>
                    <li className="list-item">Cart</li>
                    <li className="list-item">
                        <Link to="/contact">
                        Contact us
                        </Link>
                        </li>
                    <button className="login-btn" onClick={()=>{
                        // btnName = "Logout";
                        SessionStatus === 'Login' ? setSessionStatus('Logout') : setSessionStatus('Login');
                    }}>{SessionStatus}</button>
                </ul>

            </div>
        </div>


    )
}

//exporting it so we can use it in other components
export default Header;
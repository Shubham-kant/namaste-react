import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="list-item">Home</li>
                    <li className="list-item">About</li>
                    <li className="list-item">Cart</li>
                    <li className="list-item">Contact us</li>
                </ul>

            </div>
        </div>


    )
}

//exporting it so we can use it in other components
export default Header;
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const isOnline = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Delivery Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Status :<span className="status"> {isOnline ? "🟢" : "🔴"}</span>
          </li>
          <li>
            <Link to="/" className="nav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="nav">
              Grocery
            </Link>
          </li>
          <li className="nav">Cart</li>

          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

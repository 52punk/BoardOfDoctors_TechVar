import React from "react";
import "./styles.css";
import logo from "../../static/bod_logo.png";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-icon-container">
        <img src={logo} alt="doctor_strange" />
      </div>
      <div className="navbar-title-container">Board of Doctors</div>
      <div className="navbar-auth-container">Login</div>
    </div>
  );
};
export default NavBar;

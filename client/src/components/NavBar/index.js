import React from "react";
import "./styles.css";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-icon-container">
        <img
          src="https://cdn.dribbble.com/users/68544/screenshots/3397089/doctor_strange.png"
          alt="doctor_strange"
        />
      </div>
      <div className="navbar-title-container">Board of Doctors</div>
      <div className="navbar-auth-container">Login</div>
    </div>
  );
};
export default NavBar;

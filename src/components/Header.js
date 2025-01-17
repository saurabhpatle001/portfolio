import React, { useState } from "react";
import "../styles/global.css";
import profileImage from "../assets/profile.jpg"; // Adjust the path as needed

const Header = () => {
  const [ripple, setRipple] = useState(false);

  const handleProfileClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600); // Reset the ripple effect
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-pic-container" onClick={handleProfileClick}>
          <img
            src={profileImage}
            alt="Profile"
            className="profile-pic"
          />
          {ripple && <span className="ripple" />}
        </div>
        <h1>Saurabh Patle</h1>
        <p>SOFTWARE DEVELOPER</p>
      </div>
    </header>
  );
};

export default Header;

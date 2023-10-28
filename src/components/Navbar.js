import React, { useState } from "react";

import { FaUser } from "react-icons/fa";

const Navbar = ({ onUserIconClick, isLoginSignupVisible }) => {
  return (
    <div class="navbarnew">
      <h1>TypeCat</h1>
      {/* {showWords && (
        <div>
          <span onClick={showLoginPage}>Login</span>
          <span onClick={showSignupPage}>Signup</span>
        </div>
      )} */}
      <FaUser
        size={40}
        color="white"
        onClick={() => onUserIconClick(!isLoginSignupVisible)}
      />
    </div>
  );
};
export default Navbar;

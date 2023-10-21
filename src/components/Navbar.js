import React, { useState } from "react";

import { FaUser } from "react-icons/fa";

const Navbar = ({ onUserIconClick }) => {
  const [showWords, setShowwords] = useState(true);

  const showLoginPage = () => {
    setShowwords(false);
  };
  const showSignupPage = () => {
    setShowwords(false);
  };
  return (
    <div class="navbarnew">
      <h1>TypeCat</h1>
      {/* {showWords && (
        <div>
          <span onClick={showLoginPage}>Login</span>
          <span onClick={showSignupPage}>Signup</span>
        </div>
      )} */}
      <FaUser size={40} color="white" onClick={onUserIconClick} />
    </div>
  );
};
export default Navbar;

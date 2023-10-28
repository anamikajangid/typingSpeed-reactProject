import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Tyingbox from "./components/Typingbox";
import Footer from "./components/Footer";

import "./App.css";
import "./fonts.css";
import { isVisible } from "@testing-library/user-event/dist/utils";

function App() {
  const [isLoginSignupVisible, setIsLoginSignupVisible] = useState(false);

  const handleIconClick = (isVisible) => {
    setIsLoginSignupVisible(isVisible);
  };

  const [isSigupVisible, setIsSignUpVisible] = useState(false);

  const handleSignupPageVisibility = (isVisible) => {
    setIsSignUpVisible(isVisible);
  };
  return (
    <div className="App">
      <Navbar
        onUserIconClick={handleIconClick}
        isLoginSignupVisible={isLoginSignupVisible}
      />

      {isLoginSignupVisible && (
        <div className="login-signup">
          <Login />
          <Signup
            onSignUpClick={handleSignupPageVisibility}
            isSigupVisible={isSigupVisible}
          />
        </div>
      )}

      <Tyingbox />
      <Footer />
    </div>
  );
}

export default App;

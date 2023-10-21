import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Tyingbox from "./components/Typingbox";
import Footer from "./components/Footer";

import "./App.css";
import "./fonts.css";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);

  const handleIconClick = () => {
    setShowLoginPage(true);
    setShowSignupPage(true);
  };
  return (
    <div className="App">
      <Navbar onUserIconClick={handleIconClick} />
      {showLoginPage && (
        <div className="login-overlay">
          <Login />
        </div>
      )}
      {showSignupPage && (
        <div className="login-overlay">
          <Signup />
        </div>
      )}

      <Tyingbox />
      <Footer />
    </div>
  );
}

export default App;

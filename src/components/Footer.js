import React, { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [selectedcolor, setSelectedColor] = useState("black");
  const handleColorChange = (e) => {
    setSelectedColor((document.body.style.backgroundColor = e.target.value));
  };
  return (
    <div className="footersection">
      <div className="icons">
        <FaGithub size={30} color="white" />
        <FaLinkedin size={30} color="white" />
        <GrMail size={30} color="white" />
        <FaInstagram size={30} color="white" />
      </div>

      <div className="colorchange">
        <select id="themecolor" onChange={handleColorChange}>
          <option value="black">Black</option>
          <option value="lightblue">Light-Blue</option>
          <option value="green">Green</option>
          <option value="lightgray">Gray</option>
          <option value="lightpink">Light-Pink</option>
        </select>
        {/* <div
          className="themecontent"
          style={{ backgroundColor: selectedcolor }}
        >
          <p>Hello my name is Anamika</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;

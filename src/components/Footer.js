import React from "react";
import { MdForum, MdSearch, MdAdd, MdPerson } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-icon-container">
        <MdForum className="icons" />
      </div>
      <div className="footer-icon-container">
        <MdSearch className="icons" />
      </div>
      <div className="footer-icon-container">
        <MdAdd className="icons" />
      </div>
      <div className="footer-icon-container">
        <MdPerson className="icons" />
      </div>
    </div>
  );
}

export default Footer;

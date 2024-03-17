// Footer.js

import React from "react";
// import "./Styles/Books.css";

const Footer = () => {
  return (
    <footer
      className=" text-light text-center py-2 mt-4 fixed-bottom"
      style={{
        background: "#444444  ",
      }}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Azure Cart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

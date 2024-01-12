import React from "react";
import logo from "../assets/Logo.svg";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <img className="logo" alt="logo" src={logo} />
    </div>
  );
}

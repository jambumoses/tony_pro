import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-note">
        get 10% off the promo off ts sections - <b>shop now!</b>
      </div>

      <div className="nav-bar-right">
        <span><Link to="" className="a active" href="">my account</Link></span>
        <span><Link to="" className="a" href="">login</Link></span>
        <span><Link to="" className="a" href="">home</Link></span>
        <span><Link to="" className="a" href="">contact</Link></span>
      </div>
    </nav>
  );
}

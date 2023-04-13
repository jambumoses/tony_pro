import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-note">
        get 10% off the promo off ts sections - <b>shop now!</b>
      </div>

      <div className="nav-bar-right">
        <span><Link to="" className="a active" href="">home</Link></span>
        <span><Link to="/shop" className="a" href="">our-shop</Link></span>
        <span><Link to="/about" className="a" href="">about</Link></span>
        <span><Link to="/contact" className="a" href="">contact</Link></span>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {

  const CurrentPage = useSelector(state=>state.constant.currentPage);

  return (
    <nav className="nav-bar">
      <div className="nav-bar-note" style={{color:"red"}}>
      <Typewriter
                        loop={0}
                        typeSpeed={40}
                        deleteSpeed={10}
                        delaySpeed={5000}
                        words={["get 10% off the promo off ts sections "]}/>
        <b>shop now!  </b>
      </div>

      <div className="nav-bar-right">
        <span><Link to="" className={(CurrentPage == "Home")?"a active":"a"} href="">home</Link></span>
        <span><Link to="/shop" className={(CurrentPage == "Shop")?"a active":"a"} href="">shop</Link></span>
        <span><Link to="/about" className={(CurrentPage == "About")?"a active":"a"} href="">about</Link></span>
        <span><Link to="/contact" className={(CurrentPage == "Contact")?"a active":"a"} href="">contact</Link></span>
      </div>
    </nav>
  );
}

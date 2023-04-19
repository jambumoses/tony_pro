import React from "react";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import { constantActions } from "../store/constantSlice";

export default function Header() {

  const dispatch = useDispatch();
  const CurrentPage = useSelector(state=>state.constant.currentPage);
  const OfferMessages = useSelector(state=>state.constant.data.OfferMessages);

  function resetDetailsPage(){
    dispatch(constantActions.updateDetailsPage(""));
  }

  return (
    <nav className="nav-bar">
      <div className="nav-bar-note">
      <Typewriter
          loop={0}
          cursor
          cursorStyle="👈"
          typeSpeed={40}
          deleteSpeed={10}
          delaySpeed={4000}
          words={OfferMessages}/>
        <b><Link to="/shop" style={{color: "lightgray",textDecoration:"none"}} >shop now!</Link>  </b>
      </div>

      <div className="nav-bar-right">
        <span><Link to="" onClick={resetDetailsPage} className={(CurrentPage == "Home")?"a active":"a"} href="">home</Link></span>
        <span><Link to="/shop" onClick={resetDetailsPage} className={(CurrentPage == "Shop")?"a active":"a"} href="">shop</Link></span>
        <span><Link to="/about" onClick={resetDetailsPage} className={(CurrentPage == "About")?"a active":"a"} href="">about</Link></span>
        <span><Link to="/contact" onClick={resetDetailsPage} className={(CurrentPage == "Contact")?"a active":"a"} href="">contact</Link></span>
      </div>
    </nav>
  );
}

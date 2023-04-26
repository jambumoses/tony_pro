import React from "react";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import { constantActions } from "../store/constantSlice";
import $ from "jquery";

export default function Header() {

  const dispatch = useDispatch();
  const CurrentPage = useSelector(state=>state.constant.currentPage);
  const OfferMessages = useSelector(state=>state.constant.data.OfferMessages);
  const cartNo = useSelector((state) => state.constant.data.cart.count);

  function resetDetailsPage(){
    dispatch(constantActions.updateDetailsPage(""));
  }

  if (CurrentPage !== "Home") {
    $("#showCartOnNav").css("visibility","visible").slideDown("slow");
  }else{
    $("#showCartOnNav").slideUp("slow").css("visibility","hidden");
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
        <span><Link to="" onClick={resetDetailsPage} className={(CurrentPage == "Home")?"a active":"a"}>home</Link></span>
        <span><Link to="/shop" onClick={resetDetailsPage} className={(CurrentPage == "Shop")?"a active":"a"}>shop</Link></span>
        <span><Link to="/about" onClick={resetDetailsPage} className={(CurrentPage == "About")?"a active":"a"}>about</Link></span>
        <span><Link to="/contact" onClick={resetDetailsPage} className={(CurrentPage == "Contact")?"a active":"a"}>contact</Link></span>
        <span><Link to="/account" onClick={resetDetailsPage} className={(CurrentPage == "Account")?"a active":"a"}>my account</Link></span>
        <span id="showCartOnNav" style={{visibility:"hidden"}}><Link to="/cart"  onClick={resetDetailsPage} className={(CurrentPage == "Cart")?"a active":"a"}> <i style={{color: (CurrentPage == "Cart")? "lightgray":"grey"}} className="fa fa-shopping-cart"></i> <sup style={{color:"lightgray",fontSize:"12px"}}>{cartNo}</sup> </Link></span>
      </div>
    </nav>
  );
}

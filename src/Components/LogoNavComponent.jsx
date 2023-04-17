import React, { useState } from "react";
import $ from "jquery";
import { useSelector } from "react-redux";

function showSearchInput() {
  $("#search-input").slideToggle("slow");
}

export default function LogoNavComponent() {
  const logo = useSelector((state) => state.constant.logo.nav);
  const [cartNo, setCartNo] = useState(34);

  return (
    <>
      <section className="hero-nav-section">
        <div className="hero-nav-logo">
          {" "}
          <img src={require(`../Assets/logos/${logo}`)} alt="" />
        </div>
        <div>
          <span className="hero-nav-right-item">
            <form>
              <input
                id="search-input"
                type="search"
                name="search"
                placeholder="Search For A Category"
              />
              <button onClick={() => showSearchInput()} type="button">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </span>
          <span className="hero-nav-right-item">
            <i className="fa fa-user"></i>
          </span>
          <span className="hero-nav-right-item">
            <i className="fa fa-heart"></i>
          </span>
          <span className="hero-nav-right-item">
            <i className="fa fa-shopping-cart"></i>{" "}
            <sup className="shopping-cart-count">{cartNo}</sup>
          </span>
        </div>
      </section>
    </>
  );
}
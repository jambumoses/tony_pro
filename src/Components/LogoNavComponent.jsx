import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function LogoNavComponent() {
  const dispatch = useDispatch();
  //const [searchInput, setSearchInput] = useState("");
  const searchInputData = useSelector(
    (state) => state.constant.data.searchInputData
  );
  const logo = useSelector((state) => state.constant.logo.nav);
  const cartNo = useSelector((state) => state.constant.data.cart.count);

  function handlerSearchNav(e) {
    dispatch(constantActions.searchInputData(e.target.value));
    //setSearchInput(e.target.value);
  }

  function showSearchInput() {
    dispatch(constantActions.setOnSearch(true));
    $("#search-input").slideToggle("slow");
  }

  return (
    <>
      <section className="hero-nav-section">
        <div className="hero-nav-logo">
          {" "}
          <img src={require(`../Assets/logos/${logo}`)} alt="" />
        </div>
        <div>
          <span className="hero-nav-right-item">
            <form action="/shop">
              <input
                id="search-input"
                type="search"
                name="search"
                placeholder="Search For A Category"
                value={searchInputData}
                onChange={handlerSearchNav}
                style={{
                  textAlign: "center",
                  border: "2px inset rgba(243,243,243,0.50)",
                }}
              />
              <button onClick={() => showSearchInput()} type="button">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </span>
          {/*           <span className="hero-nav-right-item">
            <i className="fa fa-user"></i>
          </span>
          <span className="hero-nav-right-item">
            <i className="fa fa-heart"></i>
          </span> */}
          <span className="hero-nav-right-item">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <i className="fa fa-shopping-cart"></i>{" "}
              <sup className="shopping-cart-count">{cartNo}</sup>
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}

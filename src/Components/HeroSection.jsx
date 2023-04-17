import React, { useState } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";

function showSearchInput() {
  $("#search-input").slideToggle("slow");
}

function DropDownComponent({ subcategories }) {
  return (
    <>
      <section
        id="dropdown-subcategories"
        className="hero-banner-categories-dropdown-section"
      >
        {subcategories.map(function (item) {
          return (
            <>
              <span key={item._id}>{item.name}</span>
            </>
          );
        })}
      </section>
    </>
  );
}

export default function HeroSection() {

  function showDropDown(id,subcategories) {
    $("#dropdown-subcategories").toggle(()=>{
      $("#icon-"+id).toggleClass("fa fa-angle-right","fa fa-angle-left");
    });
    setSubcategoriesData(subcategories)
  }

  const [subcategoriesData, setSubcategoriesData] = useState([]);
  const logo = useSelector((state) => state.constant.logo.nav);
  const categories = useSelector((state) => state.constant.data.categories);

  return (
    <>
      <div className="hero-section">
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
              <sup className="shopping-cart-count">0</sup>
            </span>
          </div>
        </section>

        {/* dropdowns section*/}
        {subcategoriesData && (
          <DropDownComponent subcategories={subcategoriesData} />
        )}
        {/* End Of dropdowns section*/}

        <section className="hero-banner-section">
          <div className="categories-nav-section">
            <span className="categories-nav-item">
              <span className="categories-nav-item-title-heading">
                categories
              </span>
              <span className="categories-nav-item-ico">
                {/* <i className="fa fa-angle-right"></i> */}
              </span>
            </span>

            {/* categories */}

            {categories.map(function (item) {
              return (
                <span onClick={() => showDropDown(item._id,item.subcategories)} className="categories-nav-item" key={item._id}>
                  <span className="categories-nav-item-title">
                    {item.category}
                  </span>
                  <span
                    className="categories-nav-item-ico"
                  >
                    <i id={"dropdown-categories-icon "+"icon-"+item._id} className="fa fa-angle-right"></i>
                  </span>
                </span>
              );
            })}
          </div>

          {/* carousel */}
          <div className="corusel-section">
            <img src="" alt="" />
          </div>
        </section>

        <section className="offers-nav-section">
          <div className="offers-nav-item">
            <span className="offers-nav-item-icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span className="offers-nav-item-details">
              <span className="offers-nav-item-details-title">
                money back quarante
              </span>
              <span className="offers-nav-item-details-subtitle">
                100% money back quarante
              </span>
            </span>
          </div>

          <div className="offers-nav-item">
            <span className="offers-nav-item-icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span className="offers-nav-item-details">
              <span className="offers-nav-item-details-title">
                money back quarante
              </span>
              <span className="offers-nav-item-details-subtitle">
                100% money back quarante
              </span>
            </span>
          </div>

          <div className="offers-nav-item">
            <span className="offers-nav-item-icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span className="offers-nav-item-details">
              <span className="offers-nav-item-details-title">
                money back quarante
              </span>
              <span className="offers-nav-item-details-subtitle">
                100% money back quarante
              </span>
            </span>
          </div>

          <div className="offers-nav-item">
            <span className="offers-nav-item-icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span className="offers-nav-item-details">
              <span className="offers-nav-item-details-title">
                money back quarante
              </span>
              <span className="offers-nav-item-details-subtitle">
                100% money back quarante
              </span>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

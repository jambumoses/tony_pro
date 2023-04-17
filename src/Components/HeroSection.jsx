import React from "react";
import {useSelector} from "react-redux";
import $ from "jquery";

function showSearchInput(){
  $("#search-input").slideToggle("slow");
}

export default function HeroSection() {

  const logo = useSelector(state => state.constant.logo.nav);

  return (
    <>
      <div className="hero-section">
        <section className="hero-nav-section">
            <div className="hero-nav-logo"> <img src={require(`../Assets/logos/${logo}`)} alt="" /></div>
            <div>
                <span className="hero-nav-right-item">
                  <form>
                    <input id="search-input" type="search" name="search" placeholder="Search For A Category" />
                    <button onClick={()=>showSearchInput()} type="button"><i className="fa fa-search"></i></button>
                  </form>
                </span>
                <span className="hero-nav-right-item"><i className="fa fa-user"></i></span>
                <span className="hero-nav-right-item"><i className="fa fa-heart"></i></span>
                <span className="hero-nav-right-item"><i className="fa fa-shopping-cart"></i> <sup className="shopping-cart-count">0</sup></span>
            </div>
        </section>

        <section className="hero-banner-section">
          <div className="categories-nav-section">
            <span className="categories-nav-item">
              <span className="categories-nav-item-title categories-nav-item-title-heading">categories</span>
              <span className="categories-nav-item-ico">
                {/* <i className="fa fa-angle-right"></i> */}
              </span>
            </span>

            <span className="categories-nav-item">
              <span className="categories-nav-item-title">printers</span>
              <span className="categories-nav-item-ico">
                <i className="fa fa-angle-right"></i>
              </span>
            </span>

            <span className="categories-nav-item">
              <span className="categories-nav-item-title">
                phones & tablets
              </span>
              <span className="categories-nav-item-ico">
                <i className="fa fa-angle-right"></i>
              </span>
            </span>

            <span className="categories-nav-item">
              <span className="categories-nav-item-title">
                other electronics
              </span>
              <span className="categories-nav-item-ico">
                <i className="fa fa-angle-right"></i>
              </span>
            </span>

            <span className="categories-nav-item">
              <span className="categories-nav-item-title">computers</span>
              <span className="categories-nav-item-ico">
                <i className="fa fa-angle-right"></i>
              </span>
            </span>

            <span className="categories-nav-item">
              <span className="categories-nav-item-title">printers</span>
              <span className="categories-nav-item-ico">
                <i className="fa fa-angle-right"></i>
              </span>
            </span>

            <span className="categories-nav-item">
              <span className="categories-nav-item-title">
                phones & tablets
              </span>
              <span className="categories-nav-item-ico">
                <i className="fa fa-angle-right"></i>
              </span>
            </span>

            <span className="categories-nav-item">
              <span className="categories-nav-item-title">
                other electronics
              </span>
              <span className="categories-nav-item-ico">
                <i className="fa fa-angle-right"></i>
              </span>
            </span>
          </div>

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

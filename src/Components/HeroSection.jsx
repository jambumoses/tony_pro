import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import LogoNavComponent from "./LogoNavComponent";
import { Link } from "react-router-dom";
import { constantActions } from "../store/constantSlice";

function DropDownComponent({ subcategories }) {
  const dispatch = useDispatch();
  function dropdownLink(item) {
    dispatch(
      constantActions.updateShopFilter({
        category: item.category,
        brand: item.brand,
        //color: item.color,
        //price: 0,
        //rating: 0,
      })
    );
  }

  return (
    <>
      <section
        id="dropdown-subcategories"
        className="hero-banner-categories-dropdown-section"
      >
        {subcategories.map(function (item) {
          return (
            <>
              <span key={item._id}>
                {/* <span onClick={()=>dropdownLink(item)} className="a">{item.name}</span> */}
                {/* <a className="a" href={"/shop?category="+item.name}>{item.name}</a> */}
                <Link
                  to="/shop"
                  onClick={() => dropdownLink(item)}
                  className="a"
                >
                  {item.name}
                </Link>
              </span>
            </>
          );
        })}
      </section>
    </>
  );
}

export default function HeroSection() {
  function showDropDown(id, subcategories) {
    $("#dropdown-subcategories").toggle(() => {
      $("#icon-" + id).toggleClass("fa fa-angle-right", "fa fa-angle-left");
    });
    setSubcategoriesData(subcategories);
  }

  const [subcategoriesData, setSubcategoriesData] = useState([]);
  const heroBanners = useSelector((state) => state.constant.data.banners.home);

  const note_offers = useSelector(
    (state) => state.constant.data.banners.note_offers
  );

  const categories = useSelector((state) => state.constant.data.categories);

  return (
    <>
      <div className="hero-section">
        <LogoNavComponent />

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
                <span
                  onClick={() => showDropDown(item._id, item.subcategories)}
                  className="categories-nav-item"
                  key={item._id}
                >
                  <span className="categories-nav-item-title">
                    {item.category}
                  </span>
                  <span className="categories-nav-item-ico">
                    <i
                      id={"dropdown-categories-icon " + "icon-" + item._id}
                      className="fa fa-angle-right"
                    ></i>
                  </span>
                </span>
              );
            })}
          </div>

          {/* carousel */}
          <div className="corusel-section">
            <Carousel
              prevIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon"
                  style={{ fontSize: "10px" }}
                />
              }
              nextIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon"
                />
              }
              interval={5000}
              indicators={false}
              pause={false}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                padding: "0px",
              }}
            >
              {heroBanners.map(function (item) {
                return (
                  <Carousel.Item key={item._id}>
                    <div className="Carousel-item">
                      <img
                        className="Carousel-banner"
                        src={require(`../Assets/banners/${item.url}`)}
                        alt=""
                      />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </section>

        <section className="offers-nav-section">
          {note_offers.map(function (item) {
            return (
              <div className="offers-nav-item">
                <span className="offers-nav-item-icon">
                  <i className={item.icon}></i>
                </span>
                <span className="offers-nav-item-details">
                  <span className="offers-nav-item-details-title">
                    {item.title}
                  </span>
                  <span className="offers-nav-item-details-subtitle">
                    {item.subtitle}
                  </span>
                </span>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

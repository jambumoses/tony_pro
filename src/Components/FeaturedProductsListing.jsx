import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";

export function FeaturedProductItem({ data }) {
  const dispatch = useDispatch();
  function updateDetailsPage(item) {
    dispatch(constantActions.updateDetailsPage(item));
  }

  return (
    <>
      {/* item */}
      <div className="featured-product">
        <span
          className="featured-product-thumbnail"
          onClick={() => updateDetailsPage(data)}
        >
          <img src={require(`../Assets/products/${data.assets.url}`)} alt="" />
        </span>
        <span className="featured-product-title">{data.title}</span>
        <span className="featured-product-details">
          {data.description.slice(0, 25)}
          <br />
          {data.description.slice(25).slice(0, 25)}
        </span>
        <span className="featured-product-rate-section">
          <span className="featured-product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
          <span className="featured-product-price">{data.price}</span>
        </span>
      </div>
    </>
  );
}

export default function FeaturedProductsListing({ featuredTitle, products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <section className="featured-product-listing-section">
        <div className="featured-product-listing-head-section">
          <span className="featured-product-listing-head-title">
            {featuredTitle}
          </span>

          {/*  scroll arrows */}
          <span>
            <span className="featured-product-listing-scroll-button">
              <i className="fa fa-angle-left"></i>
            </span>
            <span className="featured-product-listing-scroll-button">
              <i className="fa fa-angle-right"></i>
            </span>
          </span>
        </div>

        <div className="featured-product-listing-container">
          {products.map(function (item) {
            return <FeaturedProductItem key={item._id} data={item} />;
          })}

          {/* <Slider {...settings}></Slider> */}
        </div>
      </section>
    </>
  );
}

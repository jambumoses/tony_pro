import React from "react";

export function FeaturedProductItem({ data }) {
  return (
    <>
      {/* item */}
      <div className="featured-product">
        <span className="featured-product-thumbnail">
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
        </div>
      </section>
    </>
  );
}

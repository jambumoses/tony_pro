import React from "react";

function FeaturedProductItem({ data }) {
  return (
    <>
      {/* item */}
      <div className="featured-product">
        <span className="featured-product-thumbnail">
          <img src="" alt="" />
        </span>
        <span className="featured-product-title">Acer Aspire R3</span>
        <span className="featured-product-details">
          premuim quad core 4th Gen
          <br />
          14 GB/500 GB HDD/Win00
        </span>
        <span className="featured-product-rate-section">
          <span className="featured-product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
          <span className="featured-product-price">$ 3,990</span>
        </span>
      </div>
    </>
  );
}

export default function FeaturedProductsListing({ products }) {
  return (
    <>
      <section className="featured-product-listing-section">
        <div className="featured-product-listing-head-section">
          <span className="featured-product-listing-head-title">
            popular products
          </span>
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
            return <FeaturedProductItem data={products} />;
          })}
        </div>
      </section>
    </>
  );
}

import React from "react";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import WholeShopListing from "../Components/WholeShopListing";

export default function Shop() {
  return (
    <>
      <WholeShopListing />
      <hr />
      {/* related products   */}
      <FeaturedProductsListing />
    </>
  );
}

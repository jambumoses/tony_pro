import React, { useState } from "react";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import WholeShopListing from "../Components/WholeShopListing";
import { constantActions } from "../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Details";

export default function Shop() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Shop"));
  dispatch(constantActions.setCurrentPage("Shop"));

  const Products = useSelector((state) => state.constant.data.products);
  const details_page = useSelector((state) => state.constant.data.details_page);

  if (details_page !== "") {
    return <Details />;
  }

  return (
    <>
      <WholeShopListing />

      <hr />

      {/* related products   */}
      <FeaturedProductsListing
        featuredTitle="related products"
        products={Products}
      />
    </>
  );
}

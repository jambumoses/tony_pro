import React from "react";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import WholeShopListing from "../Components/WholeShopListing";
import { constantActions } from "../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Shop() {
  
  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"shop"));
  dispatch(constantActions.setCurrentPage("shop"));

  return (
    <>
      <WholeShopListing />
      <hr />
      {/* related products   */}
      <FeaturedProductsListing />
    </>
  );
}

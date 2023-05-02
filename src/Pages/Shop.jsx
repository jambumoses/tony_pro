import React, { useState } from "react";
import WholeShopListing from "../Components/WholeShopListing";
import { constantActions } from "../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Details";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";

export default function Shop() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Shop"));
  dispatch(constantActions.setCurrentPage("Shop"));

  const Products = useSelector((state) => state.constant.data.products);
  const details_page = useSelector((state) => state.constant.data.details_page);

  const [shuffleRelatedProducts, setShuffleRelatedProducts] = useState([
    ... Products,
  ]);

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  
  if (details_page !== "") {
    return <Details />;
  }

  return (
    <>
      <WholeShopListing />

      <hr />

      {/* related products   */}
      <FeaturedProductsListing
        delay={5000}
        featuredTitle="related products"
        products={shuffle(shuffleRelatedProducts)}
      />
    </>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import { constantActions } from "../store/constantSlice";

export default function Cart() {
  const Products = useSelector((state) => state.constant.data.products);
  const cart = useSelector((state) => state.constant.data.cart);

  
  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Cart"));
  dispatch(constantActions.setCurrentPage("Cart"));

  return (
    <>
      <div>
        <span>shop/cart</span>
      </div>

      {/* related products */}
      <FeaturedProductsListing
        featuredTitle="related products"
        products={Products}
      />

      {/* trends */}
      <FeaturedProductsListing
        featuredTitle="top rating products"
        products={Products}
      />
    </>
  );
}

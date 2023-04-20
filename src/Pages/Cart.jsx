import React from "react";
import { useSelector } from "react-redux";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";

export default function Cart() {
  const Products = useSelector((state) => state.constant.data.products);
  const cart = useSelector((state) => state.constant.data.cart);

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

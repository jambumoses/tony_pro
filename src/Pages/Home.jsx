import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import BrandsBanner from "../Components/BrandsBanner";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function Home() {
  
  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName));
  dispatch(constantActions.setCurrentPage("Home"));

  const Products = useSelector((state) => state.constant.data.products);

  return (
    <>
      <HeroSection />
      <FeaturedProductsListing featuredTitle="top trends" products={Products}/>
      <FeaturedProductsListing featuredTitle="computers" products={Products}/>
      <FeaturedProductsListing featuredTitle="printers" products={Products}/>
      <BrandsBanner />
    </>
  );
}

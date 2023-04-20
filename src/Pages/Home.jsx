import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import BrandsBanner from "../Components/BrandsBanner";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";
import Details from "./Details";
import OfferScrollDealsBanner from "../Components/OfferScrollDealsBanner";

export default function Home() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName));
  dispatch(constantActions.setCurrentPage("Home"));

  const Products = useSelector((state) => state.constant.data.products);
  const computersBanner = useSelector(
    (state) => state.constant.data.banners.computers
  );
  const details_page = useSelector((state) => state.constant.data.details_page);

  if (details_page !== "") {
    return <Details />;
  }

  return (
    <>
      <HeroSection />
      <FeaturedProductsListing delay={3000} featuredTitle="top trends" products={Products} />
      <FeaturedProductsListing delay={5000} featuredTitle="computers" products={Products} />
      <FeaturedProductsListing delay={7000} featuredTitle="printers" products={Products} />
      <BrandsBanner image={computersBanner} />
      <FeaturedProductsListing delay={6000} featuredTitle="gaming consoles" products={Products} />

      <OfferScrollDealsBanner />
    </>
  );
}

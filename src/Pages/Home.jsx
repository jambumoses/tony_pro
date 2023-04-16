import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import BrandsBanner from "../Components/BrandsBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsListing />
      <FeaturedProductsListing />
      <FeaturedProductsListing />
      <BrandsBanner />
    </>
  );
}

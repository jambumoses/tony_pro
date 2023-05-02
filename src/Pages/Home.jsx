import React, { useState } from "react";
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

  /* page titles */
  dispatch(constantActions.updatePageTitles(companyName));
  dispatch(constantActions.setCurrentPage("Home"));

  const Products = useSelector((state) => state.constant.data.products);
  const [shuffleProducts1, setShuffleProducts1] = useState([...Products]);
  const [shuffleProducts2, setShuffleProducts2] = useState([...Products]);
  const [shuffleProducts3, setShuffleProducts3] = useState([...Products]);
  const [shuffleProducts4, setShuffleProducts4] = useState([...Products]);


  const computersBanner = useSelector(
    (state) => state.constant.data.banners.computers
  );
  const details_page = useSelector((state) => state.constant.data.details_page);

  if (details_page !== "") {
    return <Details />;
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */

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


  return (
    <>
      <HeroSection />
      <FeaturedProductsListing
        delay={3000}
        featuredTitle="top trends"
        products={shuffle(shuffleProducts1)}
      />
      <FeaturedProductsListing
        delay={5000}
        featuredTitle="computers"
        products={shuffle(shuffleProducts2)}
      />
      <FeaturedProductsListing
        delay={7000}
        featuredTitle="printers"
        products={shuffle(shuffleProducts3)}
      />
      <BrandsBanner image={computersBanner} />
      <FeaturedProductsListing
        delay={6000}
        featuredTitle="gaming consoles"
        products={shuffle(shuffleProducts4)}
      />

      <OfferScrollDealsBanner />
    </>
  );
}

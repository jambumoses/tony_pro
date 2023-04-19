import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import DetailsHeroSection from "../Components/DetailsHeroSection";
import DetailsInformationSection from "../Components/DetailsInformationSection";
import { constantActions } from "../store/constantSlice";

export default function Details() {
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.constant.data.details_page);
  const Products = useSelector((state) => state.constant.data.products);

  function resetDetailsPage() {
    dispatch(constantActions.updateDetailsPage(""));
  }

  return (
    <>
      <DetailsHeroSection data={detailsData} />
      <DetailsInformationSection data={detailsData} />
      {/* back button */}
      <div style={{ padding: "0px 5%" }}>
        <button onClick={resetDetailsPage}
          style={{
            fontSize: "15px",
            fontWeight: "500",
            backgroundColor: "lightgrey",
            textTransform: "capitalize",
            padding: "2px 20px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          back
        </button>
      </div>
      {/* related products   */}
      <FeaturedProductsListing
        featuredTitle="related products"
        products={Products}
      />
    </>
  );
}

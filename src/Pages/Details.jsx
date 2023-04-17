import React from "react";
import {useSelector} from "react-redux";

export default function Details() {
  const detailsData = useSelector((state) => state.constant.data.details_page);

  return (
    <>
      <div>Details</div>
      <p>{detailsData.title}</p>
    </>
  );
}

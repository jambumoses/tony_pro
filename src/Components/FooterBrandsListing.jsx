import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FooterBrandsListing() {
  const Products = useSelector((state) => state.constant.data.products);

  return (
    <>
      <section className="footerBrandslisting-section">
        <h1>categories</h1>
        <ul>
          {Products.map(function (item) {
            return (
              <li>
                <a href="">{item.category}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

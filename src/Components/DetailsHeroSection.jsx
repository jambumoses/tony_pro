import React from "react";
import { useDispatch } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function DetailsHeroSection({ data }) {
  const dispatch = useDispatch;

  function addCart(item) {
    dispatch(constantActions.AddToCart(item));
  }

  return (
    <>
      <section className="Details-hero-section">
        {/* img-list */}
        <div className="Details-img-list">
          <span>
            <img
              src={require(`../Assets/products/${data.assets.url}`)}
              alt=""
            />
          </span>
          <span>
            <img
              src={require(`../Assets/products/${data.assets.url}`)}
              alt=""
            />
          </span>
          <span>
            <img
              src={require(`../Assets/products/${data.assets.url}`)}
              alt=""
            />
          </span>
        </div>

        {/* image section */}
        <div className="Details-main-img">
          <img src={require(`../Assets/products/${data.assets.url}`)} alt="" />
        </div>

        {/* inforation section */}
        <div className="Details-information-simple">
          <span className="Details-information-simple-category">
            shop / {data.category}
          </span>
          <h3>{data.title}</h3>
          <p>{data.description.slice(0, 200)}</p>
          <div className="price-section">
            <div>
              <strong>color: </strong>
              <span style={{ backgroundColor: "black" }}></span>
            </div>
            <span>{data.price}</span>
          </div>
          <button onClick={() => addCart(data)}>add to cart</button>
        </div>
      </section>
    </>
  );
}

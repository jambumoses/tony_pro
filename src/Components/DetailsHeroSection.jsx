import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function DetailsHeroSection({ data }) {
  const [MainImage, setMainImage] = useState(data.assets.url);

  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state) => state.constant.data.cart.products
  );

  function addCart(item) {
    if (cartProducts.includes(item)) {
      // add on its quantity
      alert("alert already exists");
    } else {
      dispatch(constantActions.AddToCart(item));
      dispatch(constantActions.RefeshCartCount());
    }
  }

  function updateMainImage(image) {
    setMainImage(image);
  }

  return (
    <>
      <section className="Details-hero-section">
        {/* img-list */}
        <div className="Details-img-list">
          {data.assets.images.map(function (item) {
            return (
              <span onClick={() => updateMainImage(item.url)} key={item._id}>
                <img src={require(`../Assets/products/${item.url}`)} alt="" />
              </span>
            );
          })}
        </div>

        {/* image section */}
        <div className="Details-main-img">
          <img src={require(`../Assets/products/${MainImage}`)} alt="" />
        </div>

        {/* inforation section */}
        <div className="Details-information-simple">
          <span className="Details-information-simple-category">
            shop / {data.category} / {data.brand}
          </span>
          <h3>{data.title}</h3>
          <p>{data.description.slice(0, 200)}</p>
          <div className="price-section">
            <div>
              <strong>color: </strong>
              <span style={{ backgroundColor: data.color }}></span>
            </div>
            <span>{data.price}</span>
          </div>
          <button onClick={() => addCart(data)}>add to cart</button>
        </div>
      </section>
    </>
  );
}

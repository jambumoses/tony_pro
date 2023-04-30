import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";
import LogoNavComponent from "./LogoNavComponent";
import ShopAside from "./ShopAside";

function EmptyWholeShopSearch({ message = "helo" }) {
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "0px 5%",
        }}
      >
        <h3
          style={{
            textTransform: "capitalize",
            fontSize: "15px",
            fontFamily: "poppins, sans-serif",
            fontWeight: "400",
            color: "grey",
            margin: "0px",
            padding: "10px",
          }}
        >
          {message}
        </h3>
      </section>
    </>
  );
}

function WholeShopItem({ data }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state) => state.constant.data.cart.products
  );

  function updateDetailsPage(item) {
    dispatch(constantActions.updateDetailsPage(item));
  }

  return (
    <>
      {/* item */}
      <div className="wholeShop-product">
        <span
          className="wholeShop-product-thumbnail"
          onClick={() => updateDetailsPage(data)}
        >
          {cartProducts.includes(data) && (
            <span className="product-incart">
              <span className="product-incart-icon">
                <i className="fa fa-shopping-cart"></i>
              </span>
            </span>
          )}
          <img src={require(`../Assets/products/${data.assets.url}`)} alt="" />
        </span>
        <span className="wholeShop-product-title">{data.title}</span>
        <span className="wholeShop-product-details">
          {data.description.slice(0, 25)}
          <br />
          {data.description.slice(25).slice(0, 25)}
        </span>
        <span className="wholeShop-product-rate-section">
          <span className="wholeShop-product-rating">
            {data.rating === 1 && (
              <>
                <i className="fa fa-star"></i>
              </>
            )}

            {data.rating === 2 && (
              <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </>
            )}

            {data.rating === 3 && (
              <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </>
            )}

            {data.rating === 4 && (
              <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </>
            )}

            {data.rating === 5 && (
              <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </>
            )}
          </span>
          <span className="wholeShop-product-price">$ {data.price}</span>
        </span>
      </div>
    </>
  );
}

export default function WholeShopListing() {
  const dispatch = useDispatch();
  const wholeProducts = useSelector((state) => state.constant.data.products);
  const [MoreProductsLimit, setMoreProductsLimit] = useState(30);

  const shopCategories = useSelector((state) => state.constant.data.shopFilter);

  function addMoreProducts() {
    setMoreProductsLimit(MoreProductsLimit + 20);
  }

  return (
    <>
      {/* <LogoNavComponent/> */}
      {/*       <section className="hero-nav-section">
        <div className="hero-nav-logo">
          {" "}
          <img src="" alt="" />
        </div>
        <div>
          <span className="hero-nav-right-item">
            <i className="fa fa-search"></i>
          </span>
          <span className="hero-nav-right-item">
            <i className="fa fa-user"></i>
          </span>
          <span className="hero-nav-right-item">
            <i className="fa fa-heart"></i>
          </span>
          <span className="hero-nav-right-item">
            <i className="fa fa-shopping-cart"></i>
          </span>
        </div>
      </section> */}

      <section className="wholeShopListing-section">
        <main>
          {wholeProducts.slice(0, MoreProductsLimit).map(function (item) {
            return <WholeShopItem key={item._id} data={item} />;
            /* end of filter */
          })}
        </main>

        <ShopAside />
      </section>

      <div className="see-more-btn">
        {MoreProductsLimit < wholeProducts.length && (
          <button type="button" onClick={addMoreProducts}>
            see more
          </button>
        )}
      </div>
    </>
  );
}

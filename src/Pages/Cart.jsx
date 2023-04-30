import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProductsListing from "../Components/FeaturedProductsListing";
import { constantActions } from "../store/constantSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const Products = useSelector((state) => state.constant.data.products);
  const cart = useSelector((state) => state.constant.data.cart.products);
  const cartNo = useSelector((state) => state.constant.data.cart.count);
  const checkout = useSelector((state) => state.constant.data.checkout);


  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Cart"));
  dispatch(constantActions.setCurrentPage("Cart"));

  function CartItem({ item }) {
    function addItemToCart(item) {
      dispatch(constantActions.AddItemToCart(item));
    }

    function reduceItemFromCart(item) {
      dispatch(constantActions.ReduceItemFromCart(item));
    }

    return (
      <>
        <div className="cart-item">
          <span className="cart-item-thumbnail">
            <img
              src={require(`../Assets/products/${item.assets.url}`)}
              alt=""
            />
          </span>
          <small>
            shop/{item.category}/{item.brand}/{item.title}
          </small>
          <span className="cart-item-title">
            {item.title}{" "}
            <span className="color" style={{ color: item.color }}>
              {item.color}
            </span>
          </span>
          <span className="cart-item-description">
            {item.description.slice(0, 50)} ...
          </span>
          <span className="cart-item-price">
            $ {item.subprice}
            <span className="wholeShop-product-rating">
              {item.rating === 1 && (
                <>
                  <i className="fa fa-star"></i>
                </>
              )}

              {item.rating === 2 && (
                <>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </>
              )}

              {item.rating === 3 && (
                <>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </>
              )}

              {item.rating === 4 && (
                <>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </>
              )}

              {item.rating === 5 && (
                <>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </>
              )}
            </span>
          </span>
          <div className="cart-item-quantity-section">
            <span className="cart-item-quantity">{item.quantity} items</span>
            <span className="cart-item-volume-section">
              <span onClick={() => reduceItemFromCart(item)}>
                <i className="fa fa-minus"></i>
              </span>
              <span onClick={() => addItemToCart(item)}>
                <i className="fa fa-add"></i>
              </span>
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="cart-section">
        <main>
          <h3>your cart items</h3>
          {cart !== [] && (
            <div className="cart-items-container">
              {cart.map(function (item) {
                return <CartItem key={item._id} item={item} />;
              })}
            </div>
          )}

          {cartNo === 0 && (
            <div className="cart-items-empty-section">
              <span>
                <i className="fa fa-shopping-cart"></i>
              </span>
              <h1>make some orders</h1>
              <Link className="." to="/shop">
                shop now
              </Link>
            </div>
          )}
        </main>

        {/* aside */}
        <aside>
          <div className="cart-aside-item">
            <h4>summary</h4>
            <span className="cart-aside-cont">
              <span className="cart-aside-heading">sub total</span>
              <span className="cart-aside-content">$. {checkout.subtotal}</span>
            </span>

            <span className="cart-aside-cont">
              <span className="cart-aside-heading">taxation</span>
              <span className="cart-aside-content">$. {checkout.taxation}</span>
            </span>

            <span className="cart-aside-cont">
              <span className="cart-aside-heading">shipping fee</span>
              <span className="cart-aside-content">$. {checkout.shipping_fee}</span>
            </span>

            <span className="cart-aside-cont">
              <span className="cart-aside-heading">total</span>
              <span className="cart-aside-content">$. {checkout.total}</span>
            </span>
          </div>
        </aside>
      </section>

      {/* related products */}
      <FeaturedProductsListing
        delay={5000}
        featuredTitle="related products"
        products={Products}
      />

      {/* trends */}
      <FeaturedProductsListing
        delay={6000}
        featuredTitle="top rating products"
        products={Products}
      />
    </>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";
import LogoNavComponent from "./LogoNavComponent";

function WholeShopItem({ data }) {
  return (
    <>
      {/* item */}
      <div className="wholeShop-product">
        <span className="wholeShop-product-thumbnail">
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
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
          <span className="wholeShop-product-price">{data.price}</span>
        </span>
      </div>
    </>
  );
}

export default function WholeShopListing() {
  const wholeProducts = useSelector((state) => state.constant.data.products);

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
          {wholeProducts.map(function (item) {
            return <WholeShopItem key={item._id} data={item} />;
          })}
        </main>

        <aside>
          <section className="filter-container">
            <header>categories</header>
            <div className="filter-list">
              <span>
                {" "}
                <input type="radio" name="" id="" /> computers (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> phones & tablets (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> electronics (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> printers (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> softwares (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> game consoles (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> supermarket (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> headsets (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> computer chargers (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> radios (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> television (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> smart watches (21)
              </span>
            </div>

            <div className="filter-buttons">
              <button>clear</button>
              <button>apply</button>
            </div>
          </section>

          <section className="filter-container">
            <header>brands</header>
            <div className="filter-list">
              <span>
                {" "}
                <input type="radio" name="" id="" /> sony (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> samsung (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> lenovo (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> hp (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> dell (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> tosheba (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> mac book pro (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> apple (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> infinix (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> tecno (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> itel (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> vigo (21)
              </span>
            </div>

            <div className="filter-buttons">
              <button>clear</button>
              <button>apply</button>
            </div>
          </section>

          <section className="filter-container">
            <header>color</header>
            <div className="filter-list">
              <span>
                {" "}
                <input type="radio" name="" id="" /> black (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> red (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> silver (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> pink (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> grey (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> rose (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> yellow (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> brown (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> skyblue (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> blue (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> purple (21)
              </span>
              <span>
                {" "}
                <input type="radio" name="" id="" /> orange (21)
              </span>
            </div>

            <div className="filter-buttons">
              <button>clear</button>
              <button>apply</button>
            </div>
          </section>
        </aside>
      </section>

      <div className="see-more-btn">
        <button type="button">see more</button>
      </div>
    </>
  );
}

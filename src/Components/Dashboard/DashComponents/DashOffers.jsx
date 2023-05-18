import React from "react";
import { useSelector } from "react-redux";

export default function DashOffers() {
  const offersData = useSelector(
    (state) => state.constant.data.dashboardData.offers
  );
  return (
    <>
      <div className="DashHeader">
        <h2>offers</h2>
        <div style={{ display: "flex" }}>
          <input
            style={{
              padding: "1px 10px",
              borderRadius: "5px",
              outline: "none",
              border: "2px outset black",
              textTransform: "capitalize",
              fontSize: "13px",
            }}
            type="button"
            value="add offer"
          />
        </div>
      </div>
      <section className="DashContentContainer">
        <div className="Dash-offer-section">
          <h3>heros offer</h3>
          <div className="Dash-offer-container">
            {offersData.note_offers.map(function (item) {
              return (
                <div className="Dash-offer-item" key={item._id}>
                  <span className="Dash-offer-item-icon">
                    <i className={item.icon}></i>
                  </span>
                  <span className="Dash-offer-item-title">{item.title}</span>
                  <span className="Dash-offer-item-description">
                    {item.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* products */}

        <div className="Dash-offer-section">
          <h3>products offers</h3>
          <div className="Dash-offer-container">
            {offersData.products.map(function (item) {
              return (
                <div className="Dash-offer-item-product" key={item._id}>
                  <span className="Dash-offer-item-product-discount">{item.discount} <small>discount</small></span>
                  <span className="Dash-offer-item-product-image">
                    <img src={require(`../../../Assets/offers/${item.url}`)} alt="" />
                  </span>
                  <span className="Dash-offer-item-product-title">
                    {item.title}
                  </span>
                  <span className="Dash-offer-item-product-description">
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

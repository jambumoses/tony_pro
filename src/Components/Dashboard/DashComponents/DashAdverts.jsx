import React from "react";
import { useSelector } from "react-redux";

export default function DashAdverts() {
  const AdsData = useSelector(
    (state) => state.constant.data.dashboardData.adverts
  );
  return (
    <>
      <div className="DashHeader">
        <h2>
          advertisements (<i className="fa fa-rectangle-ad"></i>)
        </h2>
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
            value="create ads"
          />
        </div>
      </div>
      <section className="DashContentContainer">
        <div className="ads-container">
          <div className="ads-item">
            {AdsData.map(function (item) {
              return (
                <span key={item._id}>
                  <img
                    src={require("../../../Assets/ads/"+item.poster)}
                    alt=""
                  />
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

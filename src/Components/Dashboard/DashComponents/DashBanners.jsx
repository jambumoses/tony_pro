import React from "react";
import { useSelector } from "react-redux";

export default function DashBanners() {
  const bannersData = useSelector(
    (state) => state.constant.data.dashboardData.banners
  );
  return (
    <>
      <div className="DashHeader">
        <h2>banners</h2>
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
            value="add banner"
          />
        </div>
      </div>
      <section className="DashContentContainer">
        <section className="Dash-banners-section">
          <div className="Dash-banners-header">hero section banner</div>
          {/* items */}
          <div className="Dash-banners-container">
            {bannersData.home.map(function (item) {
              return (
                <div key={item._id} className="Dash-banners-container-item">
                  <img src={require(`../../../Assets/banners/${item.url}`)} alt="" />
                </div>
              );
            })}
          </div>
        </section>

        <section className="Dash-banners-section">
          <div className="Dash-banners-header">product banner</div>
          {/* items */}
          <div className="Dash-banners-container">
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
          </div>
        </section>

        <section className="Dash-banners-section">
          <div className="Dash-banners-header">wallpaper banner</div>
          {/* items */}
          <div className="Dash-banners-container">
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
            <div className="Dash-banners-container-item">
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

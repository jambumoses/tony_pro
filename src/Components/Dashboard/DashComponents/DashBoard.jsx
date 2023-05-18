import React from "react";

export default function DashBoard() {
  return (
    <>
      <div className="DashHeader">
        <h2>DashBoard</h2>
        <div>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightblue",
              height: "40px",
              width: "40px",
              marginRight: "10px",
              borderRadius: "50%",
            }}
          >
            <img
              id="DashHead_product"
              src={require("../../../Assets/products/ankush-minda-B5x5AyOV3XA-unsplash-removebg-preview.png")}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </span>
        </div>
      </div>
      <section className="DashContentContainer">
        <div className="dash-cont">
          <div>
            <h1>welcome to city shopper</h1>
            <sub>jambgimo</sub>
          </div>
          <div className="dash-note">
            A wiki is essentially a database for creating, browsing, and
            searching through information. A wiki allows non-linear, evolving,
            complex, and networked text, while also allowing for editor
            argument, debate, and interaction regarding the content and
            formatting. A wiki is essentially a database for creating,
          </div>
        </div>
      </section>
    </>
  );
}

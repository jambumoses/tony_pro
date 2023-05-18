import React from "react";

export default function DashAdverts() {
  return (
    <>
      <div className="DashHeader">
        <h2>advertisements (<i className="fa fa-rectangle-ad"></i>)</h2>
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
            
            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_STICKYBANNER_1168x56.gif")}
                alt=""
              />
            </span>
            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_xoxoxoxooxox.gif")}
                alt=""
              />
            </span>

            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_xoxoxoxooxox.gif")}
                alt=""
              />
            </span>

            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_xoxoxoxooxox.gif")}
                alt=""
              />
            </span>
            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_STICKYBANNER_1168x56.gif")}
                alt=""
              />
            </span>

            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_STICKYBANNER_1168x56.gif")}
                alt=""
              />
            </span>
            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_xoxoxoxooxox.gif")}
                alt=""
              />
            </span>

            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_xoxoxoxooxox.gif")}
                alt=""
              />
            </span>

            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_xoxoxoxooxox.gif")}
                alt=""
              />
            </span>
            <span>
              <img
                src={require("../../../Assets/ads/UG_W4_JUMIA-LOVES-YOU_STICKYBANNER_1168x56.gif")}
                alt=""
              />
            </span>


          </div>
        </div>
      </section>
    </>
  );
}

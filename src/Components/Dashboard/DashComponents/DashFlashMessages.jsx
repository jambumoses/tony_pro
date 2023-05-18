import React from "react";
import { useSelector } from "react-redux";

export default function DashFlashMessages() {
  const flashmessages = useSelector(
    (state) => state.constant.data.dashboardData.FlashMesages
  );
  return (
    <>
      <div className="DashHeader">
        <h2>flash messages 👈</h2>
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
            value="add flash message"
          />
        </div>
      </div>
      <section className="DashContentContainer">
        <div className="Dash-offer-section">
          <h3>messages</h3>
          <div className="Dash-offer-container message-cont">
            {flashmessages.map(function (item) {
              return (
                <span className="message" key={item._id}>
                  <span className="note">{item.message}</span>
                  <span className="btn">
                    <i className="fa fa-save" title="edit" style={{color:"lightblue"}}></i>
                    <i className="fa fa-save" title="delete"></i>
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

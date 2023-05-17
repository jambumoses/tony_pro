import React from "react";
import { useSelector } from "react-redux";
import $ from "jquery";

function previewProduct(img) {
  $("#DashHead_product").attr(
    "src",
    require("../../../Assets/products/" + img)
  );
}

function DashProductListItem({ data }) {
  return (
    <div
      className="dashContentItem-list dashContentProduct-list"
      onMouseOver={() => previewProduct(data.assets.url)}
    >
      <span className="dashContentProduct-list-title">{data.title}</span>
      <span className="dashContentProduct-list-category">{data.category}</span>
      <span className="dashContentProduct-list-description">
        {data.description}
      </span>
      <span className="dashContentProduct-list-rating">
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
      <span className="dashContentProduct-list-price">$ {data.price}</span>
      <span className="dashContentProduct-list-buttons">
        <button>
          <i className="fa fa-save"></i>
        </button>
        <button>
          <i className="fa fa-save"></i>
        </button>
      </span>
    </div>
  );
}

export default function DashProducts() {
  const dashProduct = useSelector(
    (state) => state.constant.data.dashboardData.products
  );
  return (
    <>
      <div className="DashHeader">
        <h2>products</h2>
        <div style={{ display: "flex" }}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightblue",
              height: "30px",
              width: "30px",
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
            value="add item"
          />
        </div>
      </div>
      <section className="DashContentContainer">
        <div
          style={{ backgroundColor: "grey" }}
          className="dashContentItem-list dashContentProduct-list"
        >
          <span className="dashContentProduct-list-thumbnail"></span>
          <span className="dashContentProduct-list-title">Product</span>
          <span className="dashContentProduct-list-category">Category</span>
          <span className="dashContentProduct-list-description">
            Description
          </span>
          <span className="dashContentProduct-list-rating">Rating</span>
          <span className="dashContentProduct-list-price">Price</span>
          <span className="dashContentProduct-list-buttons">Action</span>
        </div>

        {dashProduct.map(function (item) {
          return <DashProductListItem key={item._id} data={item} />;
        })}
      </section>
    </>
  );
}

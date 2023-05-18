import React from "react";
import { useSelector } from "react-redux";
import $ from "jquery";

function previewProduct(img) {
  $("#DashHead_product").attr(
    "src",
    require("../../../Assets/products/" + img)
  );
}

export default function DashOrders() {
  const ordersData = useSelector(
    (state) => state.constant.data.dashboardData.orders
  );
  return (
    <>
      <div className="DashHeader">
        <h2>orders</h2>
        <div style={{ display: "flex" }}>
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
              src={require("../../../Assets/category/ankush-minda-B5x5AyOV3XA-unsplash-removebg-preview.png")}
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
        <br />
        <table className="orders-table" border={1} cellPadding={"10px"}>
          <tr className="orders-table-header">
            <td>product</td>
            <td>brand</td>
            <td>description</td>
            <td>price</td>
            <td>order details</td>
            <td>action</td>
          </tr>

          {/* data */}
          {ordersData.map(function (item) {
            return (
              <tr key={item._id} onMouseOver={() => previewProduct(item.assets.url)}>
                <td style={{fontSize:"13px",fontWeight:"500"}}>{item.title}</td>
                <td style={{fontSize:"12px"}}>{item.brand}</td>
                <td style={{fontSize:"12px"}}>{item.description.slice(0,50)}</td>
                <td style={{fontSize:"12px"}}>${item.price}</td>
                <td style={{textAlign:"center"}}><a style={{fontSize:"12px"}} href="/">Details</a></td>
                <td style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                  <button title="" type="button" style={{outline:"none",border:"none",backgroundColor:"transparent"}}><i className="fa fa-eye" style={{fontSize:"14px",color:"black"}}></i></button>
                  <button title="delete" type="button" style={{outline:"none",border:"none",backgroundColor:"transparent"}}><i className="fa fa-save" style={{fontSize:"14px",color:"red"}}></i></button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </>
  );
}

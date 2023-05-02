import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../../store/constantSlice";

export default function DashboardNav() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);
  const currentPage = useSelector((state) => state.constant.currentPage);
  
  const [currentDashPage, setCurrentDashPage] = useState("dashboard");
  const [activeColor,setActiveColor] = useState("skyblue")
  
  dispatch(constantActions.updatePageTitles(companyName + " . " + "Dashboard"));
  dispatch(constantActions.setCurrentPage(currentDashPage));

  function updateDashPage(pageName) {
    setCurrentDashPage(pageName);
  }

  return (
    <aside className="dashboard-nav-section">
      <h2>Dashboard</h2>
      <div className="dashboard-nav-container">
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-hand-holding-dollar"></i>
          <span style={{color: (currentPage === "dash-products") && activeColor}} onClick={()=>updateDashPage("dash-products")} className="a">
            products
          </span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-truck-fast"></i>
          <span style={{color: (currentPage === "dash-orders") && activeColor}} onClick={()=>updateDashPage("dash-orders")} className="a">orders</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-rectangle-ad"></i>
          <span style={{color: (currentPage === "dash-adverts") && activeColor}} onClick={()=>updateDashPage("dash-adverts")} className="a">adverts</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-scroll"></i>
          <span style={{color: (currentPage === "dash-banners") && activeColor}} onClick={()=>updateDashPage("dash-banners")} className="a">banners</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-bars-staggered"></i>
          <span style={{color: (currentPage === "dash-categories") && activeColor}} onClick={()=>updateDashPage("dash-categories")} className="a">categories</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-chart-line"></i>
          <span style={{color: (currentPage === "dash-trends") && activeColor}} onClick={()=>updateDashPage("dash-trends")} className="a">trends</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-gifts"></i>
          <span style={{color: (currentPage === "dash-offers") && activeColor}} onClick={()=>updateDashPage("dash-offers")} className="a">offers</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-envelope"></i>
          <span style={{color: (currentPage === "dash-emails") && activeColor}} onClick={()=>updateDashPage("dash-emails")} className="a">email list</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-envelope-open-text"></i>
          <span style={{color: (currentPage === "dash-flash-messages") && activeColor}} onClick={()=>updateDashPage("dash-flash-messages")} className="a">flash messages</span>
        </span>
        <span className="dashboard-nav-item-cont">
          <i className="fa fa-gears"></i>
          <span style={{color: (currentPage === "dash-settings") && activeColor}} onClick={()=>updateDashPage("dash-settings")} className="a">settings</span>
        </span>
      </div>
    </aside>
  );
}

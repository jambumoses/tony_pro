import React from "react";
import { useSelector } from "react-redux";
import DashBoard from "./DashComponents/DashBoard";

import DashProducts from "./DashComponents/DashProducts";
import DashOrders from "./DashComponents/DashOrders";
import DashAdverts from "./DashComponents/DashAdverts";
import DashBanners from "./DashComponents/DashBanners";
import DashCategories from "./DashComponents/DashCategories";
import DashTrends from "./DashComponents/DashTrends";
import DashOffers from "./DashComponents/DashOffers";
import DashEmails from "./DashComponents/DashEmails";
import DashFlashMessages from "./DashComponents/DashFlashMessages";

import DashSettings from "./DashComponents/DashSettings";

export default function DashboardMain() {
  const dashPages = useSelector((state) => state.constant.currentPage);
  return (
    <main className="dashboard-content-section">
      <section className="dashboard-content-container">
        {dashPages === "dashboard" && <DashBoard />}
        {dashPages === "dash-products" && <DashProducts />}
        {dashPages === "dash-orders" && <DashOrders />}
        {dashPages === "dash-adverts" && <DashAdverts />}
        {dashPages === "dash-banners" && <DashBanners />}
        {dashPages === "dash-categories" && <DashCategories />}
        {dashPages === "dash-trends" && <DashTrends />}
        {dashPages === "dash-offers" && <DashOffers />}
        {dashPages === "dash-emails" && <DashEmails />}
        {dashPages === "dash-flash-messages" && <DashFlashMessages />}
        {dashPages === "dash-settings" && <DashSettings />}
      </section>
    </main>
  );
}

import React from "react";

import DashboardNav from "./DashboardNav";
import DashboardMain from "./DashboardMain";

import "./styles/dashboard.css";
import { constantActions } from "../../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {

  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Dashboard"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100vh",
          overflow:"hidden"
        }}
      >
        <DashboardNav />
        <DashboardMain />
      </section>
    </>
  );
}

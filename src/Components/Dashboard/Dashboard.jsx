import React from "react";
import DashboardNav from "./DashboardNav";
import DashboardMain from "./DashboardMain";

import "./styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <DashboardNav />
        <DashboardMain />
      </section>
    </>
  );
}

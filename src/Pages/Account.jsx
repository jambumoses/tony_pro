import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { constantActions } from "../store/constantSlice";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

export default function Account() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(
    constantActions.updatePageTitles(companyName + " . " + "My Account")
  );
  dispatch(constantActions.setCurrentPage("Account"));

  const [AccountStatus, setAccountStatus] = useState("login");

  if (AccountStatus !== "login") {
    return <SignUp />;
  } else {
    return <Login />;
  }
}

import React, { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";

function LoginComponent() {
  return <>login page</>;
}

export default function Login() {
  const [isLoginedIn, setIsLoginedIn] = useState(false);

  if (isLoginedIn) {
    return <Dashboard />;
  } else {
    return <LoginComponent />;
  }
}

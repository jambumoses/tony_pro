import React, { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";

function LoginComponent() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputerrorEmail, setInputerrorEmail] = useState(false);
  const [inputerrorPassword, setInputerrorPassword] = useState(false);


  function submitLogin() {
    //login information
    if (email === "jambcareer@gmail.com" && password === "admin") {
      dispatch(constantActions.isLogedinState(true));
      setInputerrorEmail(false);
      setInputerrorPassword(false);
    } else {
      dispatch(constantActions.isLogedinState(false));
      setInputerrorEmail(true);
      setInputerrorPassword(true);
    }
  }

  function loginstatus() {
    dispatch(constantActions.loginState(false));
  }

  return (
    <>
      <section className="account-container">
        <section className="account-section">
          <h1>login</h1>
          <form>
            <table border={1}>
              <tr>
                <td>
                  <label htmlFor="">email or user</label>
                </td>
                <td
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  />
                  {inputerrorEmail && (
                    <i
                      className="fa fa-triangle-exclamation"
                      style={{
                        color: "red",
                        position: "absolute",
                        marginTop: "5px",
                        marginLeft: "20px",
                      }}
                    ></i>
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="">password</label>
                </td>
                <td style={{ position: "relative" }}>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Your Password"
                    required
                  />
                  {inputerrorPassword && (
                    <i
                      className="fa fa-triangle-exclamation"
                      style={{
                        color: "red",
                        position: "absolute",
                        marginTop: "5px",
                        marginLeft: "20px",
                      }}
                    ></i>
                  )}
                </td>
              </tr>
            </table>

            <div className="remember-section">
              <input type="checkbox" name="" id="" />
              remember me
            </div>

            <div className="account-links-section">
              <span onClick={() => loginstatus()} className="a">
                create free account
              </span>
              <span className="a">forgot password</span>
            </div>

            <div className="login-button">
              <button onClick={() => submitLogin()} type="button">
                login
              </button>
            </div>
          </form>
        </section>

        <section className="account-logo-section">
          <img
            src={require("../Assets/banners/freestocks-_3Q3tsJ01nc-unsplash-removebg-preview.png")}
            alt=""
          />
        </section>
      </section>
    </>
  );
}

export default function Login() {
  const dispatch = useDispatch();
  const isLoginedIn = useSelector((state) => state.constant.data.isLogedin);

  if (isLoginedIn) {
    return <Dashboard />;
  } else {
    return <LoginComponent />;
  }
}

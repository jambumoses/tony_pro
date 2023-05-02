import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function SignUp() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* errors */
  const [inputerrorEmail, setInputerrorEmail] = useState(false);
  const [inputerrorPassword, setInputerrorPassword] = useState(false);

  function submitLogin() {
    //regstered information
  }

  function backtoLogin() {
    dispatch(constantActions.loginState(true));
  }

  return (
    <>
      <section className="account-container">
        <section className="account-section">
          <div
            className="account-links-section"
            style={{ justifyContent: "flex-start" }}
          >
            <span onClick={() => backtoLogin()} className="a">
              back to login
            </span>
          </div>

          <h1>register</h1>
          <form>
            <table border={1}>
              <tr>
                <td>
                  <label htmlFor="">first Name</label>
                </td>
                <td
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Your First Name"
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
                  <label htmlFor="">last name</label>
                </td>
                <td
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Your Last Name"
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
                  <label htmlFor="">date of birth</label>
                </td>
                <td
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="date"
                    placeholder="Enter Your date of Birth"
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
                  <label htmlFor="">email</label>
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
                  <label htmlFor="">phone</label>
                </td>
                <td
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Your Phone"
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

              <tr>
                <td>
                  <label htmlFor="">Confirm Password</label>
                </td>
                <td
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Confirm Password"
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
            </table>

            <br />
            <br />
            <h3>Policies</h3>
            <br />
            <p>
              A wiki is essentially a database for creating, browsing, and
              searching through information. A wiki allows non-linear, evolving,
              complex, and networked text, while also allowing for editor
              argument, debate, and interaction regarding the content and. <a href="#">read more</a>
            </p>
            <span style={{
              display: "flex"
            }}>
            <input type="checkbox" name="" id="" style={{marginRight: "10px"}} />
            i agree
            </span>

            <div
              className="login-button"
              style={{ justifyContent: "flex-start" }}
            >
              <button onClick={() => submitLogin()} type="button">
                register
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

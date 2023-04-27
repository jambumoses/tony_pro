import React from "react";
import { constantActions } from "../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

export default function About() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "About"));
  dispatch(constantActions.setCurrentPage("About"));

  return (
    <>
      <section>banner section</section>

      <section className="scrolling-category-section">
        <small>products categories</small>
        <section className="scrolling-category-container">
          <section className="animate-section-1">
            <div className="scroll-item-con1">
              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/ankush-minda-B5x5AyOV3XA-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">computers</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/giorgio-trovato-8krX0HkXw8c-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">printers</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/jose-gil-Uar8mh_f0kA-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">samsung phones</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/leon-seibert-IjEsNibC4pc-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">television</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/paolo-giubilato-ZwKCWVFdrcs-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">television</span>
              </div>
            </div>

            <div className="scroll-item-con1">
              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/ankush-minda-B5x5AyOV3XA-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">computers</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/giorgio-trovato-8krX0HkXw8c-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">printers</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/jose-gil-Uar8mh_f0kA-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">samsung phones</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/leon-seibert-IjEsNibC4pc-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">television</span>
              </div>

              <div className="scroll-item">
                <span className="icon">
                  <img
                    src={require("../Assets/products/paolo-giubilato-ZwKCWVFdrcs-unsplash-removebg-preview.png")}
                    alt=""
                  />
                </span>
                <span className="label">television</span>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section className="services-section">
        <div className="service-titles">
          <h1>
            services <br />
            we can <br />
            help you <br />
            with.
          </h1>
          <span>23</span>
        </div>

        <div className="services-right-section">
          <span>
            <button>know more</button>
            <p>
              A wiki is essentially a database for creating, browsing, and
              searching through information. A wiki allows non-linear, evolving,
              complex, and networked text, while also allowing for editor
              argument, debate, and interaction regarding the content and
            </p>
          </span>

          <span>
            <h3>services provided by tony stores</h3>
            <ul>
              <li>computer repair</li>
              <li>printers repair</li>
              <li>hardware dusting</li>
              <li>phone accelerories</li>
              <li>computer accelerories</li>
              <li>monitors</li>
            </ul>
          </span>
        </div>
      </section>
    </>
  );
}

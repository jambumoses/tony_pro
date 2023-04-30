import React from "react";
import { constantActions } from "../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";
import OfferScrollDealsBannerBanner from "../Components/OfferScrollDealsBanner";

export default function Contact() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Contact"));
  dispatch(constantActions.setCurrentPage("Contact"));

  return (
    <>
      <section className="contact-banner-section">
        <h1>
          <span>tell a</span>
          <span>friend</span>
          <span>about us</span>

          <p>
            A wiki is essentially a database for creating, browsing, and
            searching through information. A wiki allows non-linear, evolving,
            complex, and networked text, while also allowing for editor
            argument, debate, and interaction regarding the content and
            formatting. A wiki is essentially a database for creating, browsing,
            and searching through information. A wiki allows non-linear,
            evolving, complex, and networked text, while also allowing for
            editor argument, debate, and interaction regarding the content and
            formatting. A wiki is essentially a database for creating,
          </p>
        </h1>
        <section>
          <img
            src={require("../Assets/banners/freestocks-_3Q3tsJ01nc-unsplash-removebg-preview.png")}
            alt=""
          />
        </section>
      </section>

      <section className="contact-Social-section">
        <span>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
        </span>
        <span>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
        </span>
        <span>
          <a href="">
            <i className="fab fa-facebook"></i>
          </a>
        </span>
        <span>
          <a href="">
            <i className="fab fa-linkedin"></i>
          </a>
        </span>
      </section>

      <section className="contact-form-section">
        <section className="left">
          <div className="input-holder">
            <label htmlFor="">username :</label>
            <input type="text" placeholder="Enter Email" />
          </div>

          <div className="input-holder">
            <label htmlFor="">email :</label>
            <input type="text" placeholder="Enter Email" />
          </div>

          <div className="input-holder">
            <label htmlFor="">message :</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </section>

        <section className="right">
          <div>
            <h1>
              keep <span>in touch</span>
            </h1>
            <p>
              A wiki is essentially a database for creating, browsing, and
              searching through information. A wiki allows non-linear, evolving,
              complex, and networked text, while also allowing for editor
              argument, debate, and interaction regarding the content and
              formatting. A wiki is essentially a database for creating,
              browsing, and searching through information. A wiki allows
              non-linear, evolving, complex, and networked text, while also
              allowing for editor argument, debate, and interaction regarding
              the content and formatting. A wiki is essentially a database for
              creating,
            </p>
          </div>
          <div>
            <button type="button">submit</button>
          </div>
        </section>
      </section>

      <OfferScrollDealsBannerBanner />

      <div className="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </>
  );
}

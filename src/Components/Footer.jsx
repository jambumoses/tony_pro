import React from "react";
import FooterBrandsListing from "./FooterBrandsListing";

export default function Footer() {
  return (
    <>
      <FooterBrandsListing />
      <section className="footer-payment-method-section">
        <div><img src={require("../Assets/payment/payment-methods.png")} alt="" /></div>
        <div><img src={require("../Assets/payment/payment-methods.png")} alt="" /></div>
        <div><img src={require("../Assets/payment/payment-methods.png")} alt="" /></div>
        <div><img src={require("../Assets/payment/payment-methods.png")} alt="" /></div>
      </section>
      
      <section className="footer-section">
        <div className="footer-item">
          <h3>services</h3>
          <div>
            <ul>
              <li>computer repair</li>
              <li>shop now</li>
              <li>phone guides</li>
              <li>computers</li>
              <li>alienware</li>
            </ul>
          </div>
        </div>

        <div className="footer-item">
          <h3>services</h3>
          <div>
            <ul>
              <li>computer repair</li>
              <li>shop now</li>
              <li>phone guides</li>
              <li>computers</li>
              <li>alienware</li>
            </ul>
          </div>
        </div>

        <div className="footer-item">
          <h3>reach us</h3>
          <div>
            <ul>
              <li>contact us</li>
              <li><i className="fab fa-twitter"></i> twitter</li>
              <li><i className="fab fa-facebook"></i> facebook</li>
              <li><i className="fab fa-instagram"></i> instagram</li>
              <li><i className="fa fa-phone"></i> +256708093144</li>
            </ul>
          </div>
        </div>

        <div className="footer-item">
          <h3>legal</h3>
          <div>
            <ul>
              <li>about us</li>
              <li>feedbacks</li>
              <li>customer support</li>
              <li>terms & conditions</li>
              <li>cookie choice</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="foot-note">
        copyright all rights reversed 2023
      </div>
    </>
  );
}

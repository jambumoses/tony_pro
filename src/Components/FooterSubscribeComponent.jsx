import React from "react";

export default function FooterSubscribeComponent() {
  return (
    <>
      <section className="subscribe-section">
        <h3>subscribe to get fresh new product updates.</h3>
        <input type="email" name="subscribe" placeholder="Enter Email To Subscribe" />
        <button type="button">subscribe</button>
      </section>
    </>
  );
}

import React from "react";

export default function DashSettings() {
  return (
    <>
      <div className="DashHeader">
        <h2>settings</h2>
      </div>
      <section className="DashContentContainer">
        <div>payment methods</div>
        <div>{/* color scheme */}</div>
        <div>*merchant logo</div>
        <div>*merchant name</div>
        <div>*merchant username</div>
        <div>*merchant password</div>
        <div>merchant services</div>
        <div>merchant about</div>
        <div>merchant socials</div>
        <div>*merchant phone</div>
        <div>*merchant email</div>
        <div>*merchant date of birth</div>
        <div>merchant policies</div>
        <div>accounts/users/clients</div>
        <div>merchant terms and condition</div>
        <div>delivery/orders history</div>
        <div>*feedbacks</div>
        <div>*frequent searches</div>
      </section>
    </>
  );
}

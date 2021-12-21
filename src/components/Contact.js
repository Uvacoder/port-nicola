import React from "react";
import Header from "./Header";
export default function Contact() {
  return (
    <div>
        <Header/>
      <div className="contact-text-wrapper">
        <h1 className="contact-text-title">Contact</h1>
      </div>
      <div>
      <div className="contact-image-container">
        <img alt="monkeys" className="contact-image" src="./pictures/1.jpg"/>
      </div>
      <div >
        <p>For general enquiries, images of available works, and a price list, email me or contact me at: </p>
      </div>
      <div>
        <p className="header-p">Email: nicola.nicholas@btinternet.com</p>
        <p className="header-p">Number: 07711111111</p>
      </div>
      </div>
    </div>
  );
}

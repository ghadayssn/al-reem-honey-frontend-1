import React, { useState } from "react";
import honey from "../components/HoneyIcon.png";
import "./ContactForm.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="first-column">
              <img src={honey} alt="honey image" />
            </div>
          </div>

          <div class="column">
            <div class="second-column">
              <div>
                <label htmlFor="name">:اﻹسم</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">:البريد اﻹلتكروني</label>
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">:الرسالة</label>
                <textarea id="message" required />
              </div>
              <button type="submit">أرسل- {status}</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

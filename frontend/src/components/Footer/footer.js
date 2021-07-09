import "./footer.css";
import React from "react";
import LOGO from "./logo.jpg";

const Footer = () => (
  <div class="box">
    <div>
      <img src={LOGO} width="20%" alt="LOGO" />
      <p class="footer-company-name"> عسل الريم © 2021</p>
    </div>

    <div>
      <i class="fa fa-map-marker"></i>
      <p>
        <span>Aley,</span> Lebanon
      </p>
      <i class="fa fa-phone"></i>
      <a href="tel:+96103692451">(+961)03692451</a>
      <i class="fa fa-facebook"></i>
      <p>
        <a href="https://www.facebook.com/groups/659039764615523/?ref=share">
          عسل الريم غروب
        </a>
      </p>
    </div>

    <div>
      <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
        convallis velit, eu auctor lacus vehicula sit amet.
      </p>
    </div>
  </div>
);

export default Footer;

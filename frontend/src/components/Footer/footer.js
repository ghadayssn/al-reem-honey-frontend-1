import "./footer.css";
import React from "react";
import LOGO from "./logo.jpg";

const Footer = () => (
  <div className="wrapper">
    <div class="footer">
      <div class="1">
        <img src={LOGO} width="20%" alt="LOGO" />
        <p class="footer-company-name"> عسل الريم © 2021</p>
      </div>

      <div class="2">
        <i class="fa fa-map-marker"></i>
        <p>
          <span>عاليه,</span> لبنان
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

      <div class="3">
        <p class="footer-company-about">
          <h3> عسل الريم </h3>
          عسل الريم، بإدارة السيد بهاء جابر، لبيع أجود أنواع العسل المحلي. لدينا
          جميع أنواع العسل.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;

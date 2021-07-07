import "./footer.css";
import React from "react";
import LOGO from "./logo.jpg"

const Footer = () => (
  <div className="footer">

    <footer class="footer-distributed">

	<div class="footer-left">
        <img src={LOGO} width="20%" alt="LOGO"/>
        <p class="footer-company-name"> عسل الريم © 2021</p>
	</div>

	<div class="footer-center">
		<div>
			<i class="fa fa-map-marker"></i>
			<p><span>Aley,</span> Lebanon</p>
		</div>
		<div>
			<i class="fa fa-phone"></i>
			<p>(+961)03692451</p>
		</div>
		<div>
			<i class="fa fa-facebook"></i>
			<p><a href="#">عسل الريم غروب</a></p>
		</div>
	</div>

	<div class="footer-right">
		<p class="footer-company-about">
		<span>About the company</span>
		Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
		</p>
		<div class="footer-icons">
            <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
		</div>

	</div>

    </footer>
</div>
);

export default Footer;
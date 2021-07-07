import "./About.css";
import React from "react";
import honey from "../components/Footer/logo.jpg";

export default function About() {
  return (
    <div class="flexbox">
      <div class="one">
        <h3>عسل الريم</h3>
        <div class="pic">
          <img src={honey} alt="honey pic" />
        </div>
      </div>
      <div class="two">lorem</div>
    </div>
  );
}

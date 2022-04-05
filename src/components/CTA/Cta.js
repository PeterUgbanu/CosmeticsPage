import React from "react";
import ctaImage from "../../assets/ctaImage.svg";
import "./Cta.css";

const Cta = () => {
  return (
    <div className="cta-container" id="contact">
      <div className="cta">
        <div className="content">
          <h2>Enough talk, let's make you look beautiful</h2>
          <p>
            There are many variations of passages of lorem Ipsum available, but
            the
          </p>
        </div>
        <div className="img">
          <img src={ctaImage} alt="cta" />
        </div>
        <div>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Cta;

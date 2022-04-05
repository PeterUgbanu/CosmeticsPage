import React from "react";
import "./WhyUs.css";
import whyus from "../../assets/whyus.svg";
import whyusImage from "../../assets/whyusImage.png";
import LearnmoreVector from "../../assets/LearnmoreVector.svg";
import LearnmoreEclipse from "../../assets/LearnmoreEclipse.svg";

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <section className="whyus">
        <div className="whyus-group1">
          <div className="content">
            <p>Why Choose Us ?</p>
            <h2>
              How to use ? <br /> learn more details.
            </h2>
          </div>
          <div className="description">
            <div>
              <img src={whyus} alt="why us" />
            </div>
            <div>
              <p>Dose not contain alcohol.</p>
              <h2>PH 3.5</h2>
            </div>
          </div>
        </div>
        <div className="whyus-group2">
          <div className="apply-img">
            <img src={whyusImage} alt="why us" />
          </div>
          <div className="apply-ingredients">
            <h4>Apply & Ingredients</h4>
            <p>
              Give your face that gorgeous sun-kissed look with high-quality
              bronzers! Makeup city is a house to international brands that sell
              natural-looking bronzers. Bronzing is about giving your face the
              perfect dimension and warmth.{" "}
            </p>
            <p>
              If you are looking for ways to warm up your pale skin, apply
              bronzer, and see the difference. Bronzer face seems the smart way
              to add glamour to your otherwise simplistic look.
            </p>
            <div>
              <div>
                <img src={LearnmoreEclipse} alt="learn more" />
                <img src={LearnmoreVector} alt="learn more" />
              </div>
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

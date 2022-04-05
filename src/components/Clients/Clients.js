import React from "react";
import stripe from "../../assets/stripe.svg";
import google from "../../assets/google.svg";
import deloitte from "../../assets/Deloitte.svg";
import accenture from "../../assets/accenture.svg";
import ibm from "../../assets/ibm.svg";
import samsung from "../../assets/samsung.svg";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients-logos">
        <h1 className="title">SOME OF OUR TRUSTED CLIENTS</h1>
        <div className="logos">
          <div>
            <img src={stripe} alt="stripe logo" />
          </div>
          <div>
            <img src={google} alt="google logo" />
          </div>
          <div>
            <img src={deloitte} alt="deloitte logo" />
          </div>
          <div>
            <img src={accenture} alt="accenture logo" />
          </div>
          <div>
            <img src={ibm} alt="ibm logo" />
          </div>
          <div>
            <img src={samsung} alt="samsung logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

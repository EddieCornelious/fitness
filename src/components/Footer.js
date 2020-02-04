import "../styles/Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div id="contact" className="footer__top">
        <div style={{ textAlign: "center" }} className="container">
          <h4>sign-up and save</h4>
          <p>
            Sign up and stay up to date on all the latest news from Xenos
            Fitness and and get 20% off your first session!
          </p>

          <div className="input-group news">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
            <span className="input-group-btn">
              <button className="btn btn-default subscribe" type="button">
                SIGN UP
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>
          Xenos Fitness, 1300 S Los Angeles St, Los Angeles, California
        </span>
      </div>
    </div>
  );
};

export default Footer;

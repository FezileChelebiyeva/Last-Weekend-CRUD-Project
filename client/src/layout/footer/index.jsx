import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/images/logo.png.webp";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="top">
            <div className="course">
              <div className="img">
                <img src={logo} alt="" />
              </div>
              <p className="title">
                The automated process starts as soon as <br /> your clothes go
                into the machine.
              </p>
              <div className="icons">
                <div className="circle">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-pinterest-p"></i>
                </div>
              </div>
            </div>
            <nav>
              <ul>
                <h3>Our solutions</h3>
                <li>
                  <Link>Design & creatives</Link>
                </li>
                <li>
                  <Link>Telecommunication</Link>
                </li>
                <li>
                  <Link>Restaurant</Link>
                </li>
                <li>
                  <Link>Programing</Link>
                </li>
                <li>
                  <Link>Architecture</Link>
                </li>
              </ul>
              <ul>
                <h3>Support</h3>
                <li>
                  <Link>Design & creatives</Link>
                </li>
                <li>
                  <Link>Telecommunication</Link>
                </li>
                <li>
                  <Link>Restaurant</Link>
                </li>
                <li>
                  <Link>Programing</Link>
                </li>
                <li>
                  <Link>Architecture</Link>
                </li>
              </ul>
              <ul>
                <h3>Company</h3>
                <li>
                  <Link>Design & creatives</Link>
                </li>
                <li>
                  <Link>Telecommunication</Link>
                </li>
                <li>
                  <Link>Restaurant</Link>
                </li>
                <li>
                  <Link>Programing</Link>
                </li>
                <li>
                  <Link>Architecture</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bottom">
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              <i className="fa-solid fa-heart"></i>
              by Colorlib
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

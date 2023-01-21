import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import "./index.scss";
import CoursesCard from "../../components/card-couerse";
import SubjectsCard from "../../components/card-subjects";
const HomePage = () => {
  return (
    <div id="home-page">
      <Header />
      <div className="container">
        <div className="home-page">
          <div className="about">
            <h1>
              Online learning <br /> platform
            </h1>
            <p>
              Build skills with courses, certficates, and degrees online form
              world class universities and companies
            </p>
            <button>Join For Free</button>
          </div>
          <div className="boxes">
            <div className="card">
              <div className="img">
                <img src={icon1} alt="" />
              </div>
              <div className="text">
                <h3>60+ UX courses</h3>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={icon2} alt="" />
              </div>
              <div className="text">
                <h3>Expert instructors</h3>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={icon3} alt="" />
              </div>
              <div className="text">
                <h3>Life time access</h3>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoursesCard />
      <SubjectsCard />
      <Footer />
    </div>
  );
};

export default HomePage;

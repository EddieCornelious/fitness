import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import WhySection from "./WhySection.js";
import CoachesSection from "./CoachesSection.js";
import PlansSection from "./PlansSection.js";
import TestimonySection from "./TestimonySection.js";
import AppointmentSection from "./AppointmentSection.js";
import Footer from "./Footer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="hero">
          <div className="hero__text__wrap">
            <h1>
              Fitness & Health is a{" "}
              <span className="important__hero__text">Mentality</span>
            </h1>

            <p>Let us help you cultivate a fitness lifestyle</p>
            <a href="#">Start your journey</a>
          </div>
        </div>

        <WhySection />
        <CoachesSection />
        <PlansSection />
        <TestimonySection />
        <AppointmentSection />
        <Footer />
      </div>
    );
  }
}

export default App;

import "../styles/TestimonySection.scss";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Testimony extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFired: false
    };
  }

  postCount = () => {
    console.log("end");
  };

  startCount = isVisible => {
    console.log("checking");
    if (isVisible) {
      this.setState({
        hasFired: true
      });
    }
  };

  render() {
    return (
      <div className="testimony">
        <CountUp
          onEnd={this.postCount}
          start={0}
          duration={5}
          delay={2}
          end={this.state.hasFired ? this.props.amount : 0}
          redraw={false}
          separator={","}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={this.startCount} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h3 className="testimony__text">{this.props.text}</h3>
      </div>
    );
  }
}
const TestimonySection = () => {
  return (
    <section className="testimony__section">
      <div className="container">
        <div className="col-md-6 col-lg-3">
          <Testimony amount={5000} text="People Helped" />
        </div>
        <div className="col-md-6 col-lg-3">
          <Testimony amount={100000} text="Pounds Lost" />
        </div>
        <div className="col-md-6 col-lg-3">
          <Testimony amount={2000} text="Happy Customers" />
        </div>
        <div className="col-md-6 col-lg-3">
          <Testimony amount={1500} text="Sessions Made" />
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;

import "../styles/PlansSection.scss";
import React from "react";
import SectionHeader from "./SectionHeader.js";
import dumbell from "../images/dumbell.jpg";
import kettle from "../images/kettle.jpg";
import weights from "../images/weights.jpg";
const data = {
  0: {
    bg: dumbell,
    list: [
      "Group Classes",
      "Discuss Fitness Goals",
      "Group Trainer",
      "Fitness Orientation",
      "Time Management Classes"
    ],
    price: 400
  },
  1: {
    bg: kettle,
    list: [
      "10 Free Personal Sessions",
      "Fat Loss Lectures",
      "Meal Packages",
      "Calorie Counter",
      "Professional Oversight"
    ],
    price: 589
  },
  2: {
    bg: weights,
    list: [
      "20 Free Personal Sessions",
      "Fat Loss Plans",
      "Meal Packages",
      "Calorie Counte",
      "Muscle Building Program"
    ],
    price: 600
  }
};

const PlansCard = props => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className={"flip-card-front _" + props.id}>
          <div
            style={{ backgroundImage: "url(" + data[props.id].bg + ")" }}
            className="flip__card__top"
          >
            <div className="top__text__wrap">
              <h3 className="h1">{props.t1}</h3>

              <h3 className="h2">{props.t2}</h3>
            </div>
          </div>
          <div className="flip__card__bottom">
            <ul>
              {data[props.id].list.map(name => {
                return <li key={name}>{name}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={"flip-card-back __" + props.id}>
          <p>only</p>
          <h3>
            <span>&#36;</span>
            {data[props.id].price}
          </h3>
          <a href="#">Book Now!</a>
        </div>
      </div>
    </div>
  );
};

const PlansSection = props => {
  return (
    <section className="plans__section">
      <SectionHeader title="plans" subTitle="Choose a plan" />
      <div className="container plans">
        <div className="col-sm-4">
          <PlansCard t1="The" t2="Rookie" id="0" />
        </div>
        <div className="col-sm-4">
          <PlansCard t1="The" t2="Veteran" id="1" />
        </div>
        <div className="col-sm-4">
          <PlansCard t1="The" t2="All-Star" id="2" />
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

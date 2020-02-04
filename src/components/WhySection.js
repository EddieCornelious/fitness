import "../styles/WhySection.scss";
import React from "react";

const data = [
  "From bodybuilding to powerlifting and everything in between, Xenos Fitness has the equipment to help you reach your goals. With dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need.",
  "No matter what kind of workouts you decide to do at Xenos Fitness, we believe that having a general fitness foundation is the most important part of a balanced and healthy cardiovascular system. As a result, a general fitness base is at the core of all of our plans.",
  "Our functional training program is one of our most popular ones because the specific exercises are constructed in such a way to prevent injuries and over-exertion. This, coupled with the consistent results of our moderately intense functional training program, makes it a program you do not want to miss.",
  "Ever tired of working out by yourself? If so, maybe working out with a group of people is the solution for you. Choose from small group sizes of 4 to medium group sizes 6 and get ready to mingle and have blast all while burning fat."
];
const WhyParagraph = ({ font, title, id }) => {
  return (
    <div className="activity__wrap">
      <i className={font} />
      <h3 className="activity__name">{title}</h3>
      <p>{data[id]}</p>
    </div>
  );
};

const WhySection = () => {
  return (
    <section className="why__section">
      <div className="why__section__left">&nbsp;</div>
      <div className="why__section__right">
        <WhyParagraph id={0} title="weight training" font="fas fa-dumbbell" />
        <WhyParagraph id={1} title="general fitness" font="fas fa-heartbeat" />
        <WhyParagraph id={2} title="functional training" font="fas fa-biking" />
        <WhyParagraph id={3} title="group excercise" font="fas fa-users" />
      </div>
    </section>
  );
};

export default WhySection;

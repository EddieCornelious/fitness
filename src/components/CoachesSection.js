import "../styles/CoachesSection.scss";
import React from "react";
import SectionHeader from "./SectionHeader.js";
import { availability, excercises } from "./data.js";

function incTime(time) {
  if (Number(time) === 12) {
    return 1;
  }
  return Number(time) + 1;
}

function timeOfDay(time) {
  if (time.indexOf("am") === -1) {
    return "pm";
  }
  return "am";
}

const ScheduleRow = ({ time, info }) => {
  return (
    <tr>
      <td className="exc__start">{time}</td>
      {info.map(item => {
        if (!item) {
          return <td key={"" + time + Math.random() * 1000}>&nbsp;</td>;
        }
        return (
          <td
            key={"" + time + Math.random() * 1000}
            style={{ color: "rgba(125, 255, 162, 1)" }}
          >
            <p className="exc">{excercises[item].title}</p>
            <p className="time">
              {time +
                "-" +
                incTime(time.slice(0, time.indexOf(":"))) +
                ":00" +
                timeOfDay(time)}
            </p>
          </td>
        );
      })}
    </tr>
  );
};

const CoachesSection = props => {
  return (
    <section className="coach__section">
      <SectionHeader title="weekly schedule" subTitle="see below" />
      <div className="container">
        <div className="col-xs-12">
          <table>
            <tbody>
              <tr>
                <th>&nbsp;</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
              <ScheduleRow info={availability[1]} time={"5:00am"} />
              <ScheduleRow info={availability[2]} time={"6:00am"} />
              <ScheduleRow info={availability[3]} time={"7:00am"} />
              <ScheduleRow info={availability[4]} time={"8:00am"} />
              <ScheduleRow info={availability[5]} time={"9:00am"} />
              <ScheduleRow info={availability[6]} time={"10:00am"} />
              <ScheduleRow info={availability[7]} time={"11:00am"} />
              <ScheduleRow info={availability[8]} time={"12:00pm"} />
              <ScheduleRow info={availability[9]} time={"1:00pm"} />
              <ScheduleRow info={availability[10]} time={"2:00pm"} />
              <ScheduleRow info={availability[11]} time={"3:00pm"} />
              <ScheduleRow info={availability[12]} time={"4:00pm"} />
              <ScheduleRow info={availability[13]} time={"5:00pm"} />
              <ScheduleRow info={availability[14]} time={"6:00pm"} />
              <ScheduleRow info={availability[15]} time={"7:00pm"} />
              <ScheduleRow info={availability[16]} time={"8:00pm"} />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;

import "../styles/AppointmentSection.scss";
import React from "react";
import map from "../images/map.PNG";
import SectionHeader from "./SectionHeader.js";

const AppointmentSection = () => {
  return (
    <section className="appointment__section">
      <SectionHeader title={"location"} subTitle={"visit us"} />
      <a href="#" />
      <div className="container">
        <a className="intouch" href="#contact">
          keep in touch
        </a>
        <div className="col-sm-12">
          <div className="map__wrap">
            <iframe
              className="map"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:EiZTIExvcyBBbmdlbGVzIFN0LCBMb3MgQW5nZWxlcywgQ0EsIFVTQSIuKiwKFAoSCbu2DZjMx8KAETeL7u37VjEcEhQKEgkT2ifcXcfCgBH0CEYlb98v4g&key=AIzaSyDAH8khgaCAXoupZFcKloevQgKYRE-9yXo"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

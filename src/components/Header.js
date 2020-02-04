import "../styles/Header.scss";
import React from "react";

const Header = () => {
  return (
    <nav>
      <h1>
        <a href="#">
          <span class="title-color">Xenos</span> Fitness
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Schedule</a>
        </li>
        <li>
          <a href="#">Plans</a>
        </li>

        <li>
          <a href="#">Location</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

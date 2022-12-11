/* src/App.js */
import React from "react";
import { Link } from "react-router-dom";

const About = ({ signOut, user }) => {
  return (
    <div className="index-page">
      <div className="left">
        <div className="pic"></div>
        <div className="info">
          <div>こども英会話</div>
          <div>- １対１</div>
          <div>- 親子一緒</div>
          <div>- 45mコース</div>
          <div>- 平日: 19:00 ~ 20:00</div>
          <div>土日祝: 9:00 ~ 18:00</div>
        </div>
      </div>

      <div className="right">
        <div className="pic"></div>
        <div className="info">
          <div>VIPコース</div>
          <div>- １対１</div>
          <div>- 親子一緒</div>
          <div>- 45mコース</div>
          <div>- 平日: 19:00 ~ 20:00</div>
          <div>土日祝: 9:00 ~ 18:00</div>
        </div>
      </div>
    </div>
  );
};

export default About;

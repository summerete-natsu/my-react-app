import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ signOut, user }) => {
  return (
    <div className="containers-dash">
      <h2>こども映画館</h2>
        <div className="eiga">
          <iframe
            width="510"
            height="265"
            src="https://www.youtube.com/embed/nKYCy4ZNBpU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="eiga-ppp">
            <div className="eiga-pic">

            </div>
            <div className="eiga-pic2">

            </div>
          </div>
          <div>
          <div className="info">
            <div>映画館</div>
            <div>- １対１</div>
            <div>- 親子一緒</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 18:00</div>
          </div>

          </div>
        </div>
      <hr className="hr" />
      <h2>オンライン会話</h2>
      <div className="h-area">
        <div className="h1 h-area-fu"></div>
        <div className="h2 h-area-fu"></div>
        <div className="h3 h-area-fu"></div>
        <div className="h4 h-area-fu"></div>
        <div className="h5 h-area-fu"><img src="HelloTalkIDNew.jpg" /></div>
        <div className="info">
            <div>VIPコース</div>
            <div>- HelloTalkID:summeretenatsu</div>
            <div>- １対１</div>
            <div>- 親子一緒</div>
            <div>- 45mコース</div>
            <div>- 平日: 19:00 ~ 20:00</div>
            <div>土日祝: 9:00 ~ 18:00</div>
          </div>
      </div>
      <hr className="hr" />
      <h2>Fun To Learn</h2>
      <div className="h-area">
        <div className="s1 h-area-su"></div>
        <div className="s2 h-area-su"></div>
        <div className="s3 h-area-su"></div>
        <div className="s4 h-area-su"></div>
        <div className="info">
            <div>ベーキング</div>
            <div>-月1</div>
            <div>- 親子一緒</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 18:00</div>
          </div>
      </div>

    </div>
  );
};

export default Dashboard;

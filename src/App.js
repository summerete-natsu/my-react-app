/* src/App.js */
import React from "react";
import { Link } from "react-router-dom";

const About = ({ signOut, user }) => {
  return (
    <>
    <h1> <center>Welcome to Tokyo</center></h1>
    <p><center>東京観光英会話コース；） </center></p>

      <div className="index-page">
        <div className="left">
          <div className="pic"></div>
          <div className="info">
            <div>渋谷Walking course</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>

        <div className="right">
          <div className="pic"></div>
          <div className="info">
            <div>新宿Walking course</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>
      </div>

      <div className="index-page">
        <div className="left">
          <div className="picc"></div>
          <div className="info">
            <div>夜競馬コース</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>

        <div className="right">
          <div className="picc"></div>
          <div className="info">
            <div>平和島BigFunLand</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>
      </div>

      <div className="index-page">
        <div className="left">
          <div className="pic"></div>
          <div className="info">
            <div>渋谷Walking course</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>

        <div className="right">
          <div className="pic"></div>
          <div className="info">
            <div>新宿Walking course</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>
      </div>

      <div className="index-page">
        <div className="left">
          <div className="picc"></div>
          <div className="info">
            <div>夜競馬コース</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>

        <div className="right">
          <div className="picc"></div>
          <div className="info">
            <div>平和島BigFunLand</div>
            <div>- 2.5hコース</div>
            <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
            <div>料金：10,000 Yen　月1回</div>
          </div>
        </div>
      </div>


      <div className="contact-area">
        <div className="contact">
          <div>
            〒143-0016 東京都大田区大森北６丁目３０−１６平和島駅前
            <div>トライアルコース　　2,000Yen/1回</div>
            <div>英語レベルアンケート10分　　無料</div>
            <div>Weekly Mansion紹介　～5万/週</div>
          </div>
          <div className="contact-img">
            <img src="LineIDNew.jpg" />
            <img src="map-detail.jpg" />

          </div>
        </div> 
      </div>
    </>
  );
};

export default About;

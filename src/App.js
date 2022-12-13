/* src/App.js */
import React from "react";
import { Link } from "react-router-dom";

const About = ({ signOut, user }) => {
  return (
    <><div className="index-page">
      <div className="left">
        <div className="pic"></div>
        <div className="info">
          <div>英会話教室</div>
          <div>-ベーキング教室、映画館、カードゲーム</div>
          <div>- 親子一緒</div>
          <div>- 2.5hコース</div>
          <div>土日祝: 9:00 ~ 11:30 13:00 ~15:30</div>
          <div>料金：10,000 Yen　月1回</div>
        </div>
      </div>

      <div className="right">
        <div className="pic"></div>
        <div className="info">
          <div>VIPコース</div>
          <div>- １対１</div>
          <div>- 親子一緒</div>
          <div>- 45mコース</div>
          <div>- 平日: 19:00 ~ 20:00 土日祝: 9:00 ~ 18:00</div>
          <div>料金：月額3万</div>

        </div>
      </div>
    </div>
    
    <div className="index-page">
        <div className="left">
          <div className="picc"></div>
          <div className="info">
            <div>TOEIC受験</div>
            <div>-コーヒー喫茶店</div>
            <div>-1hコース</div>
            <div>- 3ヵ月　6ヵ月　1年間</div>
            <div>- 平日: 20:00 ~ 22:00</div>
           <div>土日祝: 9:00 ~ 18:00</div>
            <div>料金：3ヵ月間　50万</div>
          </div>
        </div>

        <div className="right">
          <div className="picc"></div>
          <div className="info">
            <div>VIPコース</div>
            <div>- コーヒー喫茶店</div>
            <div>- テーマ指定</div>
            <div>- 1hコース</div>
            <div>- 平日: 20:00 ~ 22:00</div>
           <div>土日祝: 9:00 ~ 18:00</div>
            <div>料金：月額　10万</div>

          </div>
        </div>
      </div></>
    
  );
};

export default About;

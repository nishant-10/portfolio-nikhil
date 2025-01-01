import React from "react";
import "../css/aboutme.css";
// import photo from "../img/compress3.jpg";
import { useData } from "../contexts/data_context";

function Aboutme() {
  const { homepage_data } = useData();
  return (
    <div className="aboutContainer" id="aboutContainer">
      <h1 className="aboutTitle" id="aboutTitle">
        <p className="aboutTitleNumber" id="aboutTitleNumber">01. </p>
        <p className="aboutTitleText" id="aboutTitleText">About Me</p>
        <p className="aboutLine" id="aboutLine">――――――――――――――――――――――</p>
      </h1>
      <div className="aboutBody" id="aboutBody">
        <div className="aboutGrid" id="aboutGrid">
          <div className="aboutContent" id="aboutContent">
            <p className="aboutPara" id="aboutParaOne">{homepage_data.AllText.AboutParaOne}</p>
            <p className="aboutPara" id="aboutParaTwo">{homepage_data.AllText.AboutParaTwo}</p>
            <p className="aboutPara" id="aboutParaThree">{homepage_data.AllText.AboutParaThree}</p>
            <p className="aboutPara" id="aboutParaSkillsIntro">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="aboutSkills" id="aboutSkills">
              <ul className="aboutSkillul" id="aboutSkillList">
                {homepage_data.AllText.AboutSkills.map((item, index) => {
                  return (
                    <li className="skillLi" key={index} id={`skillLi-${index}`}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="aboutPhoto" id="aboutPhoto">
            <img className="myimage" src='/compress3.jpg' id="aboutPhotoImg" alt="My Profile" />
            <div className="afterSquare" id="afterSquare" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

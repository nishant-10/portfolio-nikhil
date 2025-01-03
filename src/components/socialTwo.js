import React, { useEffect } from "react";
import "../css/social2.css";
import { useData } from "../contexts/data_context";
// const data = require("../data/ProjectsCard.json");
function SocialTwo() {
  const { homepage_data } = useData();
  return (
    <>
      <div className="lnk2">
        <ul className="emaillist2">
          <li>――――――――――――――――――――――</li>
          <li>
            <a
              href={homepage_data.Socials.TryHackMe}
              target="_blank"
              rel="noreferrer"
              className="socioicon"
            >
              <img
                height={25}
                // style={{ marginLeft: "15px" }}
                src="/hackme.png"
                alt="tryhackme"
              />
            </a>
          </li>
          <li>
            <a
              href={homepage_data.Socials.LetsDefend}
              target="_blank"
              rel="noreferrer"
              className="socioicon"
            >
               <img
                height={20}
                // style={{ marginLeft: "15px" }}
                src="/lets-defend.png"
                alt="letsdefend"
              />
            </a>
          </li>
          <li>
            <a
              href={homepage_data.Socials.Instagram}
              target="_blank"
              rel="noreferrer"
              className="socioicon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>
          <li>
            <a
              href={homepage_data.Socials.LinkedIn}
              target="_blank"
              rel="noreferrer"
              className="socioicon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default SocialTwo;

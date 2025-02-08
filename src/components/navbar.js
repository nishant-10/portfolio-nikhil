import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import "../css/nav.css";
import { useData } from "../contexts/data_context";

let status = false;

function Navbar() {
  let { homepage_data } = useData();
  const [isHamClicked, hamClick] = useState(false);
  const box = useRef(null);
  const hamMenuRef = useRef(null); // Ref for hamMenu
  const appCoverRef = useRef(null); // Ref for appCover element

  useOutsideAlerter(box, hamMenuRef, appCoverRef);

  const changeStyles = () => {
    if (hamMenuRef.current && appCoverRef.current) {
      const t = hamMenuRef.current;

      if (!isHamClicked || !status) {
        t.style.transform = "TranslateX(0)";
        t.style.zIndex = "20";
        appCoverRef.current.classList.add("blur"); // Add the blur class
        hamClick(true);
        status = true;
      } else if (isHamClicked || status) {
        t.style.transform = "TranslateX(100%)";
        appCoverRef.current.classList.remove("blur"); // Remove the blur class
        hamClick(false);
        status = false;
      }
    }
  };

  return (
    <>
      <nav className="nav">
        <img src={"../logo-2.png"} alt="" srcSet="" />
        <ul>
          <li>
            <a href="#heroSection">
              <p>01. </p> Home
            </a>
          </li>
          <li>
            <a href="#cardArea">
              <p>02. </p>Projects & Writeups
            </a>
          </li>
          <li>
            <a href="#aboutContainer">
              <p>03. </p> Experience
            </a>
          </li>
          <li>
            <a href="#showMoreButt">
              <p>04. </p>Contact
            </a>
          </li>
          <li>
            <a
              className="resumebutton"
              href={homepage_data.Socials.Resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div ref={box}>
        <div className="hamburger" onClick={changeStyles}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="hamMenu" className="hamMenu" ref={hamMenuRef}>
          <ul>
            <li>
              <a href="#heroSection">
                <p>01. </p> Home
              </a>
            </li>
            <li>
              <a href="#cardArea">
                <p>02. </p>Projects
              </a>
            </li>
            <li>
              <a href="#aboutContainer">
                <p>03. </p> Experience
              </a>
            </li>
            <li>
              <a href="#showMoreButt">
                <p>04. </p>Contact
              </a>
            </li>
            <li>
              <a
                className="resumebutton"
                href={homepage_data.Socials.Resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="appCover" ref={appCoverRef}></div> {/* Add ref for appCover */}
    </>
  );
}

export default Navbar;

function useOutsideAlerter(ref, hamMenuRef, appCoverRef) {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        status &&
        hamMenuRef.current &&
        appCoverRef.current
      ) {
        const t = hamMenuRef.current;
        t.style.transform = "TranslateX(100%)";
        appCoverRef.current.classList.remove("blur"); // Remove blur when clicked outside
        status = false;
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref, hamMenuRef, appCoverRef]);
}

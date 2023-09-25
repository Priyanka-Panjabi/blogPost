import React from "react";
import "./aboutSm.css";

import UserCard from "./UserCard";

const AboutSm = () => {
  const [translateXBody, setTranslateXBody] = React.useState(0);
  const [translateXCap, setTranslateXCap] = React.useState(0);
  const containerRef = React.useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setTranslateXBody(scrollTop);
    setTranslateXCap(scrollTop);

    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setTranslateXBody(0);
      setTranslateXCap(0);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const elementStyle = {
    transform: `translate(${
      translateXBody - 250 > 300 ? 600 : translateXBody - 250
    }px)`,
    transition: "transform 0.3s ease-out",
    zIndex: "1"
  };
  const elementStyleCap = {
    transform: `translate(${-translateXCap < -450 ? -550 : -translateXCap}px)`,
    transition: "transform 0.3s ease-out",
    zIndex: "2"
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          overflowY: "auto"
        }}
        ref={containerRef}
      >
        <div className="about-banner">
          <div className="banner-img"></div>
        </div>
        <div className="about-content">
          <div className="content-text-parent">
            <p>
              TODO ADD SOME CONTENT ABOUT THIS WEBSITE. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>

            <UserCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSm;

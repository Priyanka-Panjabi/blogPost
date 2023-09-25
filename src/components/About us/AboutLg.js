import React from 'react'
import "./aboutLg.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutLg = () => {
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
    <><div
    style={{
      backgroundColor: "black",
      overflowY: "auto"
    }}
    ref={containerRef}
  >
    <div className="about-banner">
      <div className="parent-pen">
        <div className="penbody">
          <img
            id="cap"
            style={elementStyleCap}
            src="https://uploads-ssl.webflow.com/5c3a6378e76e088403f168d4/5c81317bb78f130f5aaa4789_pen-1-1%403x.png"
            height={80}
            width={250}
            alt="cap styling"
          />
          <img
            style={elementStyle}
            id="pen"
            src="https://uploads-ssl.webflow.com/5c3a6378e76e088403f168d4/5c8057df4f71c1e19f5e15a6_pen-1-2%403x.png"
            height={80}
            alt="pen styling"
          />
        </div>
      </div>
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
          officia deserunt mollit anim id est laborum.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <LinkedInIcon />
                <GitHubIcon />
                <EmailIcon />
              </div>
            </div>
          </div>
          <div id="person-details1">
            <p className="name">Tanmay</p>
            <p className="about">
              Front End Web Developer with experience in designing and
              developing extensive web-interfaces & mobile first websites.
            </p>
            <p>SDE at Oracle Cerner | 4+ YOE as a front-end developer.</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            marginTop: "50px"
          }}
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <LinkedInIcon />
                <GitHubIcon />
                <EmailIcon />
              </div>
            </div>
          </div>
          <div id="person-details2">
            <p className="name">Priyanka Panjabi</p>
            <p className="about">
              Front End Web Developer with experience in designing and
              developing extensive web-interfaces & mobile first websites.
            </p>
            <p>SDE at Wipro | ex-JIO | 6+ YOE as a front-end developer.</p>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default AboutLg
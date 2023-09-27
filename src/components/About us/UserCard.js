import React from "react";
import "./usercard.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

// Create a functional component for the user card
function UserCard() {
  return (
    <div className="container2">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg"
                alt="pro f"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px"
                }}
              />
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p style={{ flex: "1" }} className="name">
              Priyanka Panjabi
            </p>
            <div
              style={{
                flex: "4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <div>
                <p className="about">
                  Fulltime keyboard masseur. Taking pleasure in frontend
                  development and enthusiastic about acquiring knowledge.
                </p>
                <p className="about">Frontend Developer @Wipro Ltd.</p>
              </div>
              <div
                style={{
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "16px",
                  padding: "5px"
                }}
              >
                <Link
                  to="https://www.linkedin.com/in/priyanka-panjabi-84496112b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  to="https://github.com/Priyanka-Panjabi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </Link>
                <a
                  href="mailto:priyanka.panjabi88@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <img
                src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
                alt="pro f"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px"
                }}
              />
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p style={{ flex: "1" }} className="name">
              Tanmay
            </p>
            <div
              style={{
                flex: "4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <div>
                <p className="about">
                  Seasoned Frontend Developer with over 4 yrs of experience.
                  Making healthcare accessible to all @Oracle Cerner. Specialize
                  in crafting immersive UIs and bringing creative web solutions
                  to life.
                </p>
                <p className="about">SDE-2 @ Oracle Cerner</p>
              </div>
              <div
                style={{
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "16px",
                  padding: "5px"
                }}
              >
                <Link
                  to="https://www.linkedin.com/in/tanmay-17886615b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  to="https://github.com/tanmayIntelli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </Link>
                <a
                  href="mailto:tanmaypach15@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

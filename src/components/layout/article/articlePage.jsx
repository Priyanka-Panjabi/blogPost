import React, { useState, useEffect } from "react";
import "./articlePage.css";
import parse from "html-react-parser";
import { callService } from "../../../utility/common";
import ThemeContext from "../../../utility/themeContext";
import { Header } from "../header";

export const ArticlePage = ({ data }) => {
  const [articleData, setArticleData] = useState([]);
  const { theme } = React.useContext(ThemeContext);

  /**
   * This is a function to convert a standard date to dd mon yy format For eg:- 09 Sep 2023.
   *
   * @param {Date} date - date in standard Date format.
   * @returns {String} - date in "dd Mon yy"
   */
  const formatPublishedDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0"); // Ensure two-digit day
    const month = date.toLocaleString("default", { month: "short" }); // Get abbreviated month name (e.g., "Sep")
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    // This is temporarily being called from here
    callService("/articles?articleId=64fc30fddf6555a25d21f9d1").then((data) =>
      setArticleData(data)
    );
  }, []);

  const darkStyles = {
    color: "white",
    border: "2px solid rgb(36,36,36)",
    backgroundColor: "rgb(36,36,36)",
    padding: "0 30px"
  };
  const lightStyles = {
    color: "black",
    border: "2px solid #b8b8b8",
    backgroundColor: "rgb(240 240 240)",
    padding: "0 30px"
  };
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "7vh",
          backgroundColor: theme ? "rgb(50, 50, 50)" : "white"
        }}
      >
        {articleData.map((article) => {
          return (
            <div className="article" style={theme ? darkStyles : lightStyles}>
              <h2 style={{ color: theme ? "white" : "black" }}>
                {article.title}
              </h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <img
                    src={article.author.profileimage}
                    alt="Author profile image"
                    height={50}
                    width={50}
                  />
                </div>
                <div>
                  <p
                    style={{
                      margin: "0px",
                      paddingLeft: "5px",
                      fontWeight: "bold"
                    }}
                  >
                    {article.author.name}
                  </p>
                  <p
                    style={{
                      margin: "0px",
                      paddingLeft: "5px",
                      fontSize: "0.7rem"
                    }}
                  >
                    {formatPublishedDate(new Date(article.published_on))}
                  </p>
                </div>
              </div>

              {article.content.map((item) => {
                if (item.type === "text") {
                  return <p key={item._id}>{parse(item.value)}</p>;
                } else if (item.type === "image") {
                  return (
                    <center>
                      <img
                        key={item._id}
                        src={item.value}
                        style={{ maxWidth: "100%", height: "auto" }}
                        alt="img"
                      />
                    </center>
                  );
                } else if (item.type === "code") {
                  return (
                    <div>
                      <p>{item.value}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
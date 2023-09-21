import React from "react";
import { Header } from "./header";
import styles from "./Layout.module.scss";
import { Footer } from "./footer/Footer";
import ThemeContext from "../../utility/themeContext";
import RecentPosts from "../recentposts/RecentPosts";
import Heading from "./heading/Heading";
import PopularPost from "./popularPost/PopularPost";
import Articles from "./articles/Articles";

export default function Layout(props) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme ? "black" : "rgb(13 142 138 / 94%)",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "2rem",
            width: "80vw"
          }}
        >
          <PopularPost />
          <div>
            <Heading text=" RECENT POSTS" />
            <RecentPosts />
          </div>
        </div>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme ? "#0e0e0ebf" : "rgb(255 66 125 / 51%)",
          width: "100%"
        }}
      >
        <div>
          <Articles />
        </div>
      </section>
      <Footer />
    </div>
  );
}

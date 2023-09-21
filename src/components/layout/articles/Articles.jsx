import React from "react";
import { Header } from "../header";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../rtk/articlesSlice";
import ThemeContext from "../../../utility/themeContext";
import styles from "./Article.module.scss";

export default function Articles() {
  const { theme } = React.useContext(ThemeContext);
  const dispatch = useDispatch();
  const allArticles = useSelector(({ articles }) => {
    return articles.articles;
  });

  React.useEffect(() => {
    callService("/articles").then((articles) => {
      dispatch(getArticles(articles));
    });
  }, []);

  return (
    <div
      style={{ height: "100vh", backgroundColor: theme ? "#1d1d1d" : "white" }}
    >
      <Header />
      {allArticles && (
        <div className={styles.allCardsContainer}>
          <PostCard
            articles={allArticles}
            styleCard={styles.cards}
            styleCardWrapper={styles.cardWrapper}
          />
        </div>
      )}
    </div>
  );
}

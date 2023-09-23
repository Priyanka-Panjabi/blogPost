import React from "react";
import { Header } from "../header";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../rtk/articlesSlice";
import styles from "./Article.module.scss";
import { useLocation } from "react-router-dom";
import { SearchUtil } from "../search/search";

export default function Articles() {
  const dispatch = useDispatch();
  const location = useLocation();
  const allArticles = useSelector(({ articles }) => {
    return articles.articles;
  });

  React.useEffect(() => {
    if (location?.state?.data) {
      //TODO call search api with the string in location.state.data
      console.log("WILL CALL SEARCH API", location.state.data);
    } else {
      // get all the articles
      callService("/articles").then((articles) => {
        dispatch(getArticles(articles));
      });
    }
  }, []);

  //TODO: Will be used when search bar is added. We should navigate only when search is happening on main page

  return (
    <div>
      <Header />
      <div className={styles.searchbar}>
        <div
          style={{ padding: "15px 0px" }}
          className={styles.allCardsContainer}
        >
          {allArticles && (
            <PostCard
              articles={allArticles}
              styleCard={styles.cards}
              styleCardWrapper={styles.cardWrapper}
            />
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticles,
  getSearchArticles
} from "../../../rtk/articlesSlice";
import styles from "./Article.module.scss";
import { useLocation } from "react-router-dom";
// import { SearchUtil } from "../search/search";
import { Pagination, Stack } from "@mui/material";
import { SearchUtil } from "../search/search";

export default function Articles({ fromPath }) {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();
  const allArticles = useSelector(({ articles }) => {
    console.log("ARTICLES from store: ", articles);
    return articles.articles;
  });

  useEffect(() => {
    if (location?.state?.data) {
      //TODO call search api with the string in location.state.data
      console.log("WILL CALL SEARCH API", location.state.data);
      callService(`/search?str=${location.state.data}`)
        .then((articles) => {
          if (articles.length) {
            dispatch(getSearchArticles(articles));
          } else {
            alert("no result");
            getMoreArticles()
          };
        })
        .catch((err) => console.log("EEEEE:", err)
        );
    } else {
      if (!fromPath ){
        callService(`/articles?count=true`).then((count) =>
          setPageCount(Math.ceil(count / 6))
        );
      }
      getMoreArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMoreArticles = (page = 0) => {
    callService(`/articles?page=${page}${fromPath ? "&limit=3" : ""}`).then(
      (articles) => {
        if (articles.length)  dispatch(getArticles(articles));
      }
    );
  };

  return (
    <div>
      {fromPath ? (
        <>
          {allArticles && (
            <div className={styles.allCardsContainer}>
              <PostCard
                articles={allArticles}
                styleCard={styles.styleCard}
                styleCardWrapper={styles.styleCardWrapper}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <Header />
          <div className={styles.main}>
            <div className={styles.searchBar}>
              <SearchUtil />
            </div>
            <div className={styles.allCardsContainer}>
              <PostCard
                articles={allArticles}
                styleCard={styles.styleCard}
                styleCardWrapper={styles.styleCardWrapper}
              />
            </div>
            <Stack spacing={2}>
              <Pagination
                count={pageCount}
                color="secondary" 
                onChange={(evt, page) => getMoreArticles(page - 1)}
                className={styles.paginate}
                size="large" 
              />
            </Stack>
          </div>
        </>
      )}
    </div>
  );
}

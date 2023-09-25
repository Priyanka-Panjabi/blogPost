import React, { useState } from "react";
import { Header } from "../header";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticles,
  getSearchArticles,
  clearArticles
} from "../../../rtk/articlesSlice";
import styles from "./Article.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
// import { SearchUtil } from "../search/search";

export default function Articles({ count }) {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const location = useLocation();
  const allArticles = useSelector(({ articles }) => {
    console.log("ARTICLES from store: ", articles);
    return articles.articles;
  });

  React.useEffect(() => {
    if (location?.state?.data) {
      //TODO call search api with the string in location.state.data
      console.log("WILL CALL SEARCH API", location.state.data);
      callService(`/search?str=${location.state.data}`)
        .then((articles) => {
          if (articles.length) {
            dispatch(getSearchArticles(articles));
          } else alert("no result");
        })
        .catch((err) => console.log("EEEEE:", err));
    } else {
      // get all the articles
      console.log("ELSE");
      getMoreArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //TODO: Will be used when search bar is added. We should navigate only when search is happening on main page

  const getMoreArticles = () => {
    let path = `/articles?page=${page}`;
    if (count) {
      dispatch(clearArticles());
      path = `/articles?count=${count}`;
    }
    callService(path).then((articles) => {
      if (articles.length) dispatch(getArticles(articles));
      else setHasMore(false);
    });
    setPage(page + 1 * 3);
  };
  return (
    <div>
      {count ? (
        <>
          {console.log("FIRST")}
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
          {console.log("SECOND")}
          <Header />
          <div className={styles.searchbar}>
            <InfiniteScroll
              dataLength={allArticles.length}
              next={getMoreArticles}
              hasMore={hasMore}
              loader={<h4>Loading</h4>}
            >
              {allArticles && (
                <div className={styles.allCardsContainer}>
                  <PostCard
                    articles={allArticles}
                    styleCard={styles.styleCard}
                    styleCardWrapper={styles.styleCardWrapper}
                  />
                </div>
              )}
            </InfiniteScroll>
          </div>
        </>
      )}
    </div>
  );
}

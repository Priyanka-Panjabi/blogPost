import React, { useEffect, useState } from "react";
import { Header } from "../header";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../rtk/articlesSlice";
import styles from "./Article.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Articles() {

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const allArticles = useSelector(({ articles }) => {
    return articles.articles;
  });

  useEffect(() => {
    getMoreArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMoreArticles = () => {
    callService(`/articles?page=${page}`).then((articles) => {
      if(articles.length) dispatch(getArticles(articles));
      else setHasMore(false);
    });
    setPage(page+1*3);
  }

  return (
    <div>
      <Header />
      <InfiniteScroll
      dataLength={allArticles.length}
      next={getMoreArticles}
      hasMore={hasMore}
      loader={<h4>Loading</h4>}
      >
      {allArticles && (
        <div
          // style={{ backgroundColor: "#0e0e0ebf" }}
          className={styles.allCardsContainer}
        >
          <PostCard
            articles={allArticles}
            styleCard={styles.styleCard}
            styleCardWrapper={styles.styleCardWrapper}
          />
        </div>
      )}
      </InfiniteScroll>
    </div>
  );
}

import React, { useState, useEffect, useContext } from "react";
import { Header } from "../header";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, getSearchArticles } from "../../../rtk/articlesSlice";
import styles from "./Article.module.scss";
import { useLocation } from "react-router-dom";
import { StringContext } from "../../../utility/StringContext";
import { Pagination, Stack } from "@mui/material";
import { SearchUtil } from "../search/search";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Articles({ fromPath }) {
  const [pageCount, setPageCount] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const allArticles = useSelector(({ articles }) => {
    return articles.articles;
  });
  const { sharedString, updateString } = React.useContext(StringContext);

  const searchApi = (searchString) => {
    let urlToCall;
    if (searchString) {
      urlToCall = `/search?str=${searchString}`;
    } else {
      urlToCall = `/search?str=${location.state.data}`;
    }
    callService(urlToCall)
      .then((articles) => {
        if (articles.length) {
          dispatch(getSearchArticles(articles));
        } else {
          setShowSnackbar(true);
          callService(`/articles?count=true`).then((count) =>
            setPageCount(Math.ceil(count / 6))
          );
          getMoreArticles();
        }
      })
      .catch((err) => console.log("Error:", err));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      searchApi(e.target.value);
      return;
    } else if (e.key === "Enter") {
      getMoreArticles();
    }
  };

  useEffect(() => {
    if (sharedString && location?.state?.data) {
      //TODO call search api with the string in location.state.data
      searchApi();
    } else {
      if (!fromPath) {
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
        if (articles.length) {
          dispatch(getArticles(articles));
        }
      }
    );
  };

  const handleClose = () => {
    setShowSnackbar(false);
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
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={showSnackbar}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              No result found!
            </Alert>
          </Snackbar>
          <div className={styles.main}>
            <div className={styles.searchBar}>
              <SearchUtil keydownHandler={handleKeyPress} />
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

import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material/";
import styles from "./PostCard.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ThemeContext from "../../utility/themeContext";
import PostCardShimmer from "../widgets/shimmer/PostCardShimmer";

export const PostCard = ({
  title,
  type,
  styleCard,
  styleCardWrapper,
  articles = []
}) => {
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);

  const { theme } = React.useContext(ThemeContext);

  const dark = {
    backgroundColor: "#1b1b1b",
    color: "white",
    height: "100%"
  };
  const light = {
    backgroundColor: "white",
    color: "black",
    height: "100%"
  };

  return (
    <>
      {articles.length ? (
        articles.map((article) => (
          <div className={styleCardWrapper}>
            <Link
              to={`/article/${article._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label= {`Article ${article.title} opens in a new window`}
            >
              <Card className={styleCard} data-aos="zoom-in">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.thumbnail}
                    alt="green iguana"
                    className={styles.cardMedia}
                  />
                  <CardContent style={theme ? dark : light}>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme ? "#bfbfbf" : "text.secondary"}
                    >
                      {article.short_description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        ))
      ) : (
        <PostCardShimmer />
      )}
    </>
  );
};

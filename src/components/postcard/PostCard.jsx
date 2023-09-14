import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material/';
import styles from './PostCard.module.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export const PostCard = ({title, type, styleCard, styleCardWrapper, articles=[]}) => {

  React.useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);

  return (
    <>
    {articles.map(article => <div className={styleCardWrapper}>
      <Link to={`article/${article._id}`} className={styles.link}>
      <Card className={styleCard} data-aos="zoom-in">
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image={article.thumbnail}
          alt="green iguana"
          className={styles.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {article.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
   </div>)}
   </>
  );
}

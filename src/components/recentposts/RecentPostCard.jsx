import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography }  from '@mui/material';
import Halloween from '../../images/halloween.webp';
import AOS from 'aos';
import "aos/dist/aos.css";
import { callService } from '../../utility/common';
import moment from "moment";

export default function RecentPostCard() {

  const [recentArticle, setRecentArticles] = React.useState([]);

  React.useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
    callService("/articles?type=recent").then((article) => {console.log("Article",article);
    setRecentArticles(article)});
  }, []);

  return (
    <>
    {recentArticle && recentArticle.map(article=><Card sx={{ display: 'flex', marginBottom: '10px' }} data-aos="flip-right">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {article.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {article.author.name} | 
            {moment(article.author.published_on).utc().format('DD-MM-YYYY')}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, height: '120px' }}
        image={article.thumbnail}
        alt="Live from space album cover"
      />
    </Card>)}
    </>
  );
}
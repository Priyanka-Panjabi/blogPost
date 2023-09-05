import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material/';
import styles from './PostCard.module.scss';
import Halloween from '../../images/halloween.webp';

export const PostCard = () => {
  return (
    <div className={styles.cardWrapper}>
    <Card className={styles.card}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image={Halloween}
          alt="green iguana"
          className={styles.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </div>
  );
}

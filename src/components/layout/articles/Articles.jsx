import React from 'react'
import { Header } from '../header'
import { PostCard } from '../../postcard'
import { callService } from '../../../utility/common';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../../rtk/articlesSlice';
import styles from './Article.module.scss';

export default function Articles() {

  const dispatch = useDispatch();
  const allArticles= useSelector(({articles})=>{
    return articles.articles;
  })

  React.useEffect(() => {
    callService('/articles')
    .then((articles) => {dispatch(getArticles(articles))});
  }, []);

  return (
    <div><Header/>
    {allArticles && <div className={styles.allCardsContainer}>
      <PostCard articles={allArticles} styleCard={styles.cards} styleCardWrapper={styles.cardWrapper}/>
    </div>}
    </div>
  )
}

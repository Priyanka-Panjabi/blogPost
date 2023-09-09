import React from 'react'
import { Header } from './header'
import styles from './Layout.module.scss';
import { Footer } from './footer/Footer';
import { PostCard } from '../postcard';
import ThemeContext from '../../utility/themeContext';
import { ArticlePage } from './article/articlePage';

export default function Layout(props) {
  const { theme } = React.useContext(ThemeContext);
  return (    
    <div className={styles.container} style={{backgroundColor:theme?"black":"#D1B3AA"}}>
      <Header />
      {props.children}
      <div style={{ display: 'flex',
            flexDirection: 'row',
            marginBottom: '2rem', 
            width: '80%'}}>
          <PostCard/>
          {/* <PostCard/> */}
      </div>
      {/**Temporarily placed here*/}
      <ArticlePage />
    <Footer /> 
   </div>
  )
 }

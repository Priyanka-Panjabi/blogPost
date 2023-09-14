import React from 'react'
import { Header } from './header'
import styles from './Layout.module.scss';
import { Footer } from './footer/Footer';
import ThemeContext from '../../utility/themeContext';
import RecentPosts from '../recentposts/RecentPosts';
import Heading from './heading/Heading';
import PopularPost from './popularPost/PopularPost';

export default function Layout(props) {
  const { theme } = React.useContext(ThemeContext);
  return ( 
    <div className={styles.container} style={{backgroundColor:theme?"black":"#D1B3AA"}}>
      <Header />
      {props.children}
      <section style={{width: '80vw'}}>
      <div style={{ display: 'flex',
            flexDirection: 'row',
            marginBottom: '2rem', 
            width: '100%'}}>
          <PopularPost/>
          <div>
          <Heading text=" RECENT POSTS" />
          <RecentPosts/>
          </div>
          </div>
      </section>
    <Footer /> 
   </div>
   
  )
 }

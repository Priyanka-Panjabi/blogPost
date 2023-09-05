import React from 'react'
import { Header } from './header'
import styles from './Layout.module.scss';
import { Footer } from './footer/Footer';
import { PostCard } from '../postcard';
import { Box, Grid, Item } from '@mui/material/';

export default function Layout(props) {

  return (    
    <div className={styles.container}>
      <Header />
      {props.children}
      <div style={{ display: 'flex',
            flexDirection: 'row',
            marginBottom: '2rem', 
            width: '80%'}}>
          <PostCard/>
          {/* <PostCard/> */}
      </div>
    <Footer /> 
   </div>
  )
 }

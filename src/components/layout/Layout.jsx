import React from 'react'
import { Header } from './header'
import styles from './Layout.module.scss';
import { Footer } from './footer/Footer';

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Header/>
      {props.children}
      <Footer/> 
  </div>
  )
}

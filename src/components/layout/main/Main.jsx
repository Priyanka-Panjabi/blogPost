import React from 'react';
import styles from './Main.module.scss';
import { Home } from '../home';

export default function Main() {
  return (
    <div className={styles.container}>
      <Home/>
    </div>
  )
}

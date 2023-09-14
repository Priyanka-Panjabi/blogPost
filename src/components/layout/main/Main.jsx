import React from 'react';
import styles from './Main.module.scss';
import { Home } from '../home';
import ThemeContext from '../../../utility/themeContext';

export default function Main() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={styles.container} style={{backgroundColor:theme?"#D1B3AA":"whitesmoke"}}>  
      <Home/>
    </div>
  )
}

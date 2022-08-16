import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Headers.module.scss';

export const Headers = () => {
  return (
    <header  id='header'>
      <ul className={styles.headerUl}>
         <li><span className={styles.logoName}>ANime Base</span></li>
         <li>
            <Link  className={styles.headerUlLink} to="/">Anime</Link>
         </li>
         <li>
            <Link className={styles.headerUlLink} to='/Test'>Bolwanka</Link>
         </li>
         <li>
            <Link  className={styles.headerUlLink} to="/Trending">Top 10 Trending Anime</Link>
         </li>
         {/* <li>
            <Link  className={styles.headerUlLink} to="/Contact">Contact</Link>
         </li> */}
      </ul>
    </header>
  )
}

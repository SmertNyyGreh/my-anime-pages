import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Headers.module.scss';
import { Icon } from '@iconify/react';

export const Headers = () => {
  return (
    <header  id='header'>
      <ul className={styles.headerUl}>
         <li><span className={styles.logoName}>ANime Base<Icon icon="mdi:clover"  width="25" height="25" /></span></li>
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

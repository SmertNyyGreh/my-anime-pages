import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Headers.module.scss';

export const Headers = () => {
  return (
    <header>
      <ul className={styles.headerUl}>
         <li>
            <Link  className={styles.headerUlLink} to="/">Home</Link>
         </li>
         <li>
            <Link  className={styles.headerUlLink} to="/About">About</Link>
         </li>
         <li>
            <Link  className={styles.headerUlLink} to="/Contact">Contact</Link>
         </li>
      </ul>
    </header>
  )
}

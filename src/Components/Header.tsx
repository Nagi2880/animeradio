import React from 'react';
import styles from './Components.module.css';
import Headerlogo from '../Elements/Headerlogo';
import Navbar from '../Elements/Navbar';
function Header() {
  return (
    <header id={styles.HeaderContainer}>
        <Headerlogo />
        <Navbar />
    </header>
  )
}

export default Header
import React from 'react';
import styles from './Elements.module.css';
function Headerlogo() {
  return (
    <div id={styles.HeaderLogo}>
      <span id={styles.HeaderLogoStyle}>
        <span id={styles.opzon}>OPZON</span>.FM
      </span>
    </div>
  )
}

export default Headerlogo
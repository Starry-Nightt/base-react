import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.scss'

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" class="logo">
        CompanyLogo
      </Link>
      <div className={styles.headerRight}>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
      </div>
    </div>
  );
}

export default Header;

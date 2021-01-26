import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.scss";

export function Header(): JSX.Element {
  return (
    <header>
      <ul className={styles.header}>
        <li>
          <Link to="/today" className={styles.link}>
            Сегодня
          </Link>
        </li>
        <li>
          <Link to="/animals" className={styles.link}>
            Животные
          </Link>
        </li>
      </ul>
    </header>
  );
}

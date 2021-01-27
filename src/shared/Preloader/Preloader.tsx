
import React from "react";
import styles from "./preloader.scss";

export function PreLoader(): JSX.Element {
  

  return (
    <div className={styles.transitionLoader}>
    <div className={styles.transitionLoaderInner}>
      <label></label>
      <label></label>
      <label></label>
      <label></label>
      <label></label>
      <label></label>
    </div>
  </div>
  );
}

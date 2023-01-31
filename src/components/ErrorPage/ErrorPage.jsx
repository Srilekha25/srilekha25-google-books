import React from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = ({ searchTerm }) => {
  return (
    <div className={styles.ErrorPage}>
      {
        <p className={styles.container__errorPage__text}>
          No results found for search "{searchTerm}"
        </p>
      }
    </div>
  );
};

export default ErrorPage;

import React from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = ({ searchTerm, checkingAPIData }) => {
  console.log("inside error");
  return (
    <div className={styles.ErrorPage}>
      {!checkingAPIData && (
        <p>No results found for the search "{searchTerm}"</p>
      )}
    </div>
  );
};

export default ErrorPage;

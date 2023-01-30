import React from "react";
import styles from './ErrorPage.module.scss'

const ErrorPage = ({ searchTerm, checkingAPIData }) => {
  console.log("inside error");
  return (
    <div className={`${checkingAPIData} ? ${styles.errorPage} : ${styles.errorPage.active}`}>
      <p>No results found for the search "{searchTerm}"</p>
    </div>
  );
};

export default ErrorPage;

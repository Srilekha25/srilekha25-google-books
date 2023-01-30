import React from "react";
import styles from "./Header.module.scss";
const Header = (props) => {
  const receivedDataForHeaderStyle = props.toggle;
  return (
    <div
    //Changing margin height based on the cards displayed
      className={`${
        receivedDataForHeaderStyle
          ? styles.container__header__align__aftersubmit
          : styles.container__header__align
      }`}
    >
      <h1 className={styles.header__title}>What books are you looking for?</h1>
      <p className={styles.header__subtitle}>
        A Search Engine which allows to search for books in Google books API.
      </p>
    </div>
  );
};

export default Header;

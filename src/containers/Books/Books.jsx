import React from "react";
import styles from "./Books.module.scss";

const Books = ({ Image, Title, Author, Description }) => {
  return (
    <div className={styles.Cards}>
      <div className={styles.img}>
        <img src={Image} />
      </div>
      <div>
        <p>
          <b>Title: </b>
          {Title}
        </p>
        <p>
          <b>Author: </b>
          {Author}
        </p>
      </div>
      {/* <p>Description = {Description}</p> */}
    </div>
  );
};

export default Books;

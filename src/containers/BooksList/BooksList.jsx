import React from "react";
//Importing jsx
import Book from "../../components/Book/Book";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
//Importing styles
import styles from "./BooksList.module.scss";

const BooksList = ({ booksList }) => {
  const apiDataForModal = booksList;

  return (
    <div className={styles.BooksList}>
      {booksList ? (booksList.map((book, index) => (
        <Book
          key={index}
          id={index}
          Image={book.volumeInfo.imageLinks.smallThumbnail}
          title={book.volumeInfo.title}
          Author={book.volumeInfo.authors}
          booksListForModal={apiDataForModal}
        />
      ))) : ""}
    </div>
  );
};

export default BooksList;

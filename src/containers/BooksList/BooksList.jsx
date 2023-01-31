import React from "react";
//Importing jsx
import Book from "../../components/Book/Book";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
//Importing styles
import styles from "./BooksList.module.scss";

const BooksList = ({ booksList, searchTerm }) => {
  const checkingAPIData =
    booksList === undefined || booksList.length < 0 ? false : true;
  const apiDataForModal = booksList;

  return (
    <div className={styles.BooksList}>
      {checkingAPIData ? (
        booksList.map((book, index) => (
          <Book
            key={index}
            id={index}
            Image={book.volumeInfo.imageLinks.smallThumbnail}
            title={book.volumeInfo.title}
            Author={book.volumeInfo.authors}
            booksListForModal={apiDataForModal}
          />
        ))
      ): (
        <div className={styles.container__errorPage}>
          <span className={styles.container__errorPage__text}>
            <ErrorPage
              checkingAPIData={checkingAPIData}
              searchTerm={searchTerm}
            />
          </span>
          {/* Trying to display error page */}
        </div>
      )} 
    </div>
  );
};

export default BooksList;
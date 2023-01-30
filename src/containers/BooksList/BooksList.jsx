import React from "react";
import Book from "../../components/Book/Book";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

import styles from "./BooksList.module.scss";

const BooksList = ({ booksList, searchTerm }) => {
  const checkingAPIData =
  (booksList !== undefined && booksList.length > 0) ? true : false;
  const apiDataForModal = booksList;
  
  return (
    <div className={styles.BooksList}>
      {checkingAPIData ?
        booksList.map((book, index) => (
  
          <Book
            key={index}
            id={index}
            Image={
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail.length > 0
                ? book.volumeInfo.imageLinks.smallThumbnail
                : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
            }
            Title={book.volumeInfo.title}
            Author={
              book.volumeInfo.authors && book.volumeInfo.authors.length > 0
                ? book.volumeInfo.authors.map((author, index) => (
                    <p key={index}>{author}</p>
                  ))
                : <p>UnKnown Author</p>
            }
            booksListForModal = {apiDataForModal}
          />
    
        )) : <ErrorPage checkingAPIData = {checkingAPIData} searchTerm = {searchTerm}/>
       
         }
    </div>
  );
};

export default BooksList;

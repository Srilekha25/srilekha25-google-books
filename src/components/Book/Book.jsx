import React, { useState } from "react";
import styles from "./Book.module.scss";
import Modal from "../Modal/Modal";

const Book = ({
  id,
  Image,
  Title = "Title UnKnown",
  Author,
  Description,
  booksListForModal,
  notFound
}) => { 
  const [isOpen, setOpenModal] = useState(false);
  const [clickedId, setClickedId] = useState(0);

  const openModal = () => {
    setOpenModal(!isOpen);
    setClickedId(id);
  };

  let bookClicked = booksListForModal.filter((book, index) => index === id);

  return (
    // {id ? 
    // }
     // <div className={styles.container__error}>

        //   <p className={styles.container__error__message}>No results found for the search "{searchTerm}"</p>
        // </div>
    <div className={styles.container__cards__flex} onClick={openModal}>
      <div className={styles.img}>
        <img src={Image} />
      </div>
      <div className={styles.container__text__align}>
        <p>
          <b>{Title}</b>
        </p>
        <p>By {Author}</p>
      </div>

      {bookClicked &&
        bookClicked.map((book, index) => (
          <Modal
            IdForModal={clickedId}
            toggle={isOpen}
            actionToOpenModal={openModal}
            booksListForModal={booksListForModal}
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
            description={
              book.volumeInfo.description &&
              book.volumeInfo.description.length > 0 ? (
                book.volumeInfo.description
              ) : (
                <p>No Description available</p>
              )
            }
            preview={
              book.volumeInfo.previewLink &&
              book.volumeInfo.previewLink.length > 0
                ? book.volumeInfo.previewLink
                : <p>No Preview available</p>
            }
            
          />
        ))}
    </div>
  );
};

export default Book;

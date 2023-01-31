import React, { useState } from "react";
import styles from "./Book.module.scss";
import Modal from "../Modal/Modal";

const Book = ({
  id,
  Image,
  title,
  Author,
  booksListForModal,
}) => { 
  //State to open Modal
  const [isOpen, setOpenModal] = useState(false);

  //Get the id of the book which is clicked on screen
  const [clickedId, setClickedId] = useState(0);


  //Function to set state for modal open and close
  const openModal = () => {
    setOpenModal(!isOpen);
    setClickedId(id);
  };
//Getting the book based on the card clicked
  let bookClicked = booksListForModal.filter((book, index) => index === id);

  return (
    <div className={styles.container__cards__flex} onClick={openModal}>
      <div className={styles.img}>
        <img src={Image} />
      </div>
      <div className={styles.container__text__align}>
        <p>
          <b>{title}</b>
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
            //Displays details on Modal
            id={index}
            Image={book.volumeInfo.imageLinks.smallThumbnail}
            Title={book.volumeInfo.title}
            Author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            preview={book.volumeInfo.previewLink}
            
          />
        ))}
    </div>
  );
};

export default Book;

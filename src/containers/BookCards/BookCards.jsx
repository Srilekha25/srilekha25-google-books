import React from "react";
import Books from "../Books/Books";
import styles from "./BookCards.module.scss";

const BookCards = ({ bookCards }) => {
  const booksInBookCards = bookCards !== undefined ? true : false;
  console.log("books in book cards.jsx", bookCards);
  console.log(typeof bookCards);
  console.log("booksFromAPI in bookcards.jsx", booksInBookCards);
  return (
    <div>
      {booksInBookCards.map((book) => (
        <Books Title={book.volumeInfo.title} />
      ))}

      {booksFromAPI ||
        (bookCards.length === 0 && (
          <p>Books are not found with the following Search</p>
        ))}
    </div>
  );
};

// <div className={styles.BookCards}>
//   <Books
//     Image={Image}
//     Title={Title}
//     Author={Author}
//     Description={Description}
//   />
// </div>

export default BookCards;

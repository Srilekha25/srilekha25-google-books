import React, { useContext } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

const Modal = (props) => {

  const modalState = props.toggle;
  const actionToOpenModal = props.actionToOpenModal;

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`${styles.container__modal} ${
        modalState ? styles.active : ""
      }`}
    >
      <div className={styles.container__modal__content} onClick={actionToOpenModal}>
        <div className={styles.container__modal__close}>
          <button>&times;</button>
        </div>
        <div className={styles.container__modal__body}>
          <img className={styles.container__image} src={props.Image} />
          <p><b>Title: </b>{props.Title}</p>
          <p><b>Author: </b>{props.Author}</p>
          <a href={props.preview} target="_blank" className={styles.container__link}>Preview</a>
          <p><b>Description: </b>{props.description}</p>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;

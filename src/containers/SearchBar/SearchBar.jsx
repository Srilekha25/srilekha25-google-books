import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Search } from "./Search.js";
import styles from "./SearchBar.modules.scss"

const SearchBar = ({onSearch}) => {
  const [initialSearchTerm, setSearchTerm] = useState("");
  const [initialAPI, APIAfterSearch] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async () => {
    const data = await Search(initialSearchTerm);
    console.log("data in handle submit", data);
    onSearch(data);
  };

  // useEffect(()=>{
  //   Search(initialSearchTerm);
  // },initialSearchTerm)

  return (
    <div className={styles.SearchBar}>
      <input
         
        value={initialSearchTerm}
        onChange={handleChange}
        type="text"
        id="input__text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SearchBar;

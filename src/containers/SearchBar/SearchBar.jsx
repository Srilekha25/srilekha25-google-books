import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Search } from "./Search.js";
import styles from "./SearchBar.modules.scss";

const SearchBar = ({ onSearch }) => {
  const [initialSearchTerm, setSearchTerm] = useState("");
  const [initialAPI, APIAfterSearch] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    console.log("data in handle submit", initialAPI);
    console.log("type of dataFromAPI",typeof(initialAPI));
    if(initialAPI){
      onSearch(initialAPI);
    }else{
      console.log("didnt get any response");
    }
  };

  useEffect(() => {
    if (setSearchTerm) {
      console.log("initialSearchTerm", initialSearchTerm);
      Search(initialSearchTerm)
        .then((data) => APIAfterSearch(data))
        .catch((error) => console.log("error", error))
        .finally(() => console.log("in finally"));
    }
  }, [initialSearchTerm]);

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

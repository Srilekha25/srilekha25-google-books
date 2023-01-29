import React from "react";
import { useEffect, useState, useContext } from "react";
import { Search } from "./Search.js";
import { ApiDataContext } from "../../context/ApiDataProvider.jsx";
import Loading from '../../components/Loading/Loading'
import ErrorPage from "../../components/ErrorPage/ErrorPage";

import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSearch, searchTerm }) => {
  const [inputValue, setInputValue] = useState("");
  const [initialSearchTerm, setSearchTerm] = useState("");
  const [initialAPI, APIAfterSearch] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  
  const { apiData, setApiData } = useContext(ApiDataContext);
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue("");
  };
  
  useEffect(() => {
    if (initialSearchTerm) {
      setLoading(true);
      Search(initialSearchTerm)
      .then((data) => {
        APIAfterSearch(data.items);
        onSearch(data.items);
        searchTerm(initialSearchTerm);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
    }
  }, [initialSearchTerm]);
  
  return (
    <div className={styles.container__searchBar}>
      <div>
        <input
          className={styles.container__searchBar__inputfield}
          value={inputValue}
          onChange={handleChange}
          type="text"
          id="input__text"
        />
        <button
          className={styles.button__searchBar__submit}
          
          onClick={handleSubmit}
          >
          Search
        </button>
          {loading && <Loading/>}
          {error && <ErrorPage/>}
      </div>
    </div>
  );
};

export default SearchBar;

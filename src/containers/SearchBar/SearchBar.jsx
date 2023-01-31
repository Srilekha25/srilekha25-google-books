import React from "react";
import { useEffect, useState, useContext } from "react";
import { Search } from "./Search.js";
import { ApiDataContext } from "../../context/ApiDataProvider.jsx";

// Importing jsx
import Loading from '../../components/Loading/Loading'

// Importing Style sheet
import styles from "./SearchBar.module.scss";
import ErrorPage from "../../components/ErrorPage/ErrorPage.jsx";

const SearchBar = ({ onSearch, searchTerm }) => {
  //Sets input value
  const [inputValue, setInputValue] = useState("");
  //Sets the search term
  const [initialSearchTerm, setSearchTerm] = useState("");
  //Sets Data from API
  const [initialAPI, APIAfterSearch] = useState([]);
  //Set loading state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  //FOr context
  const { apiData, setApiData } = useContext(ApiDataContext);
  
  //Handles change in input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  //Sets Search term for API call
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue("");
  };
  
 
  useEffect(() => {
    if (initialSearchTerm) {
      setLoading(true);
      Search(initialSearchTerm)   //Sends search term to API Call by calling the API call function
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
        {/* Display Loading */}
          {loading && <Loading/>}
          {error && <ErrorPage/>}
      </div>
    </div>
  );
};

export default SearchBar;

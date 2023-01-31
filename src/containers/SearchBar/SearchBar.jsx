import React from "react";
import { useEffect, useState, useContext } from "react";
import { Search } from "./Search.js";
import { ApiDataContext } from "../../context/ApiDataProvider.jsx";

// Importing jsx
import Loading from "../../components/Loading/Loading";

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
  //Set Error State
  const [error, setError] = useState(false);
  const [min, max] = useState(20);

  //For context
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
      Search(initialSearchTerm) //Sends search term to API Call by calling the API call function
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
          required
        />
        <button
          className={styles.button__searchBar__submit}
          onClick={handleSubmit}
        >
          Search
        </button>
        {/* Display Loading */}
        {loading && <Loading />}
        {error && <ErrorPage />}
      </div>
      <div>
        <select onChange={handleChange} onClick={handleSubmit}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;

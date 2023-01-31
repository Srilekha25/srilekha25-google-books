import React from "react";
import { useEffect, useState, useContext } from "react";

//importing js
import { fetchBooksFromApi } from "../../Data-Utils/fetchBooksFromApi";
import { handleUndefined } from "../../Data-Utils/handleUndefined";

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
  const [error1, setError] = useState(false);

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
      fetchBooksFromApi(initialSearchTerm) //Sends search term to API Call by calling the API call function
        .then((data) => {
          const cleanedData = handleUndefined(data);
          APIAfterSearch(cleanedData);
          onSearch(cleanedData);
          searchTerm(initialSearchTerm);
        })
        .catch((error) => console.log(error.message))
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
        {error1 && <ErrorPage />}
      </div>
    </div>
  );
};

export default SearchBar;

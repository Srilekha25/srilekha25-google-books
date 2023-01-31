import { useState, useContext } from "react";

//Import Containers 
import Header from "./containers/Header/Header";
import SearchBar from "./containers/SearchBar/SearchBar";
import BooksList from "./containers/BooksList/BooksList";

// Styles for App.jsx
import styles from "./App.module.scss";

function App() {

  //Set search term
  const [searchTermfromSearchBar, setSearchTermfromSearchBar] = useState("");
  //Set Data received from API Call
  const [dataFromAPI, setDataFromAPI] = useState([]);
  //To change styles for header
  const [receivedDataForHeader, setReceivedDataForHeader] = useState(false);
  
//Function to set Data from API
  const handleSearch = (data) => {
    setDataFromAPI(data);
    setReceivedDataForHeader(true);
  };

//Function to set Search Term
  const getSearchTerm = (term) => {
    setSearchTermfromSearchBar(term);
  };

  return (
    
      <div className={styles.App}>
        <div>
          <Header toggle={receivedDataForHeader}/>
          <SearchBar onSearch={handleSearch} searchTerm={getSearchTerm} />
        </div>
        <div>
          <BooksList
            booksList={dataFromAPI}
            searchTerm={searchTermfromSearchBar}
          />
        </div>
      </div>
  
  );
}

export default App;

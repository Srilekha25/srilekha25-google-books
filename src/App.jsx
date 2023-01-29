import { useState, useContext } from "react";
import Header from "./containers/Header/Header";
import SearchBar from "./containers/SearchBar/SearchBar";
import BooksList from "./containers/BooksList/BooksList";
import ApiDataProvider from "./context/apiDataProvider.jsx";
import { ApiDataContext } from "./context/apiDataProvider.jsx";



import styles from "./App.module.scss";
import LoadingSpinner from "./components/Loading/Loading";

function App() {
  const [searchTermfromSearchBar, setSearchTermfromSearchBar] = useState("");
  const [dataFromAPI, setDataFromAPI] = useState([]);
  

  const handleSearch = (data) => {
    setDataFromAPI(data);
  };

  const getSearchTerm = (term) => {
    setSearchTermfromSearchBar(term);
  };

  return (
    
      <div className={styles.App}>
        <div>
          <Header />
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

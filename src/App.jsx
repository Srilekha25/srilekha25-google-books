import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.modules.scss";
import Header from "./containers/Header/Header";
import SearchBar from "./containers/SearchBar/SearchBar";
import Footer from "./containers/Footer/Footer";
import BookCards from "./containers/BookCards/BookCards";

import styles from "./App.modules.scss";
import Books from "./containers/Books/Books";

function App() {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  console.log("data in app.jsx", dataFromAPI);

  const handleSearch = (data) => {
    setDataFromAPI(data);
  };

  return (
    <div>
      <Header className={styles.App} />
      <SearchBar className={styles.App} onSearch={handleSearch} />
      <BookCards bookCards ={dataFromAPI}/>
      <Footer className={styles.App} />
    </div>
  );
}

export default App;

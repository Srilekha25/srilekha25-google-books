import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.modules.scss";
import Header from "./containers/Header/Header";
import SearchBar from "./containers/SearchBar/SearchBar";
import Footer from "./containers/Footer/Footer";
import BookCards from "./containers/BookCards/BookCards";


import styles from "./App.modules.scss"

function App() {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  let copyOfDataFromAPI = [...dataFromAPI];

  return (
    <div className={styles.App}>
      <Header />
      <SearchBar onSearch={(data) => setDataFromAPI(data)} />
      {copyOfDataFromAPI.map((copyOfData) => (
      <BookCards {...copyOfData.author}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;

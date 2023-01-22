import APIKEY from "../../components/CONSTANTS/CONSTANTS";

export const Search = async (initialSearchTerm) => {
  if (initialSearchTerm) {
  
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${initialSearchTerm}&key=${APIKEY}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const dataFromAPI = await response.json();
    console.log("Data Received", dataFromAPI);
    return dataFromAPI;
  }
};

export default Search;

// useEffect(() => {
//   console.log("initialSearchTerm", initialSearchTerm);
//   fetchBooks(initialSearchTerm)
//     .then((dataInJSON) => APIAfterSearch(dataInJSON))
//     .catch((error) => console.log("error", error))
//     .finally(() => console.log(dataInJSON));
// },initialSearchTerm);

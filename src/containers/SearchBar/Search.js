import APIKEY from "../../components/CONSTANTS/CONSTANTS";

export const Search = async (initialSearchTerm) => {
  console.log("search term in API call", initialSearchTerm);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${initialSearchTerm}&key=${APIKEY}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const dataFromAPI = await response.json();
    console.log("Data Received", dataFromAPI);
    return dataFromAPI.items;
};

export default Search;

import APIKEY from "../../components/CONSTANTS/CONSTANTS";

export const Search = async (initialSearchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${initialSearchTerm}&maxResults=10&key=${APIKEY}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const dataFromAPI = await response.json();
    return dataFromAPI;
};

export default Search;

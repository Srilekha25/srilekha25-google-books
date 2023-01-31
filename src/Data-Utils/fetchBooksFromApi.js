import APIKEY from "../components/CONSTANTS/CONSTANTS";

//Fetching 20 books from Google books API
export const fetchBooksFromApi = async (initialSearchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${initialSearchTerm}&maxResults=20&key=${APIKEY}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const dataFromAPI = await response.json();
    return dataFromAPI;
};

export default fetchBooksFromApi;

export const handleUndefined = (data) => {
 
    return data.map((book) => {
      const cleanedData = { ...book };
      cleanedData.volumeInfo = { ...book.volumeInfo };
      if (!cleanedData.volumeInfo.imageLinks) {
        cleanedData.volumeInfo.imageLinks = {
          smallThumbnail:
            "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png",
        };
      }
      if (!cleanedData.volumeInfo.authors) {
        cleanedData.volumeInfo.authors = "Unknown Author";
      }

      if (!cleanedData.volumeInfo.title) {
        cleanedData.volumeInfo.title = "Title Unknown";
      }

      if (!cleanedData.volumeInfo.description) {
        cleanedData.volumeInfo.description = "Unknown Description";
      }

      if (!cleanedData.volumeInfo.preview) {
        cleanedData.volumeInfo.preview = "No Preview Available";
      }

      return cleanedData;
    });
  
};

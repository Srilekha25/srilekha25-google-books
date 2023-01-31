 //Function to filter out undefined values
 export const handleUndefinedValues = ( booksList ) => {
    console.log("inside handle undefined",booksList);
    const newApiData = booksList.map((book) => {
      const copyOfVolumeInfo = {...book.volumeInfo};
      if (
        !copyOfVolumeInfo.imageLinks ||
        !copyOfVolumeInfo.imageLinks.smallThumbnail.length > 0
      ) {
        copyOfVolumeInfo.imageLinks = {
          smallThumbnail:
            "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png",
        };
      }
      if (!copyOfVolumeInfo.title) {
        copyOfVolumeInfo.title = "Title Unknown";
      }
      if (!copyOfVolumeInfo.authors || !copyOfVolumeInfo.authors.length > 0) {
        copyOfVolumeInfo.authors = ["Unknown Author"];
      }
      return { ...book, copyOfVolumeInfo };
    });
    return newApiData;
  };
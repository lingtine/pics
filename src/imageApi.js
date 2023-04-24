import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 1H2kcdYGxTF-JnHfVypI4Ryr14YEiIvRxjWgfB7Ybqo",
    },
    params: {
      query: term,
    },
  });

 console.log(response.data.results)
  return response.data.results;
};

export default searchImages;

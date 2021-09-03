const key__api = "CyPDl7NZqdAIv5Ez2RNKai6Aeu8HVx17";

const GetTrendingGif = async () => {
  return await fetch(
    `https://api.giphy.com/v1/trending/searches?api_key=${key__api}`
  )
    .then((res) => res.json())
    .then((resp) => {
      const { data } = resp;
      const dataTrending = data.map((request) => {
        const title = request;
        return title;
      });
      return dataTrending;
    });
};

export default GetTrendingGif;

const key__api = "CyPDl7NZqdAIv5Ez2RNKai6Aeu8HVx17";

const GetGifs = async ({ search, limit, page = 0 }) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key__api}&limit=${limit}&offset=${
      page * limit
    }`
  )
    .then((r) => r.json())
    .then((resp) => {
      const { data } = resp;
      const dataGiffs = data.map((i) => {
        const { url } = i.images.downsized_medium;
        const { title, id } = i;
        // console.log(url ,title ,id )
        return { url, title, id };
      });
      // console.log(res)
      return dataGiffs;
    });

  return res;
};

export default GetGifs;

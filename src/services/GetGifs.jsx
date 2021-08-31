export const GetGifs = (key_word) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=q1H2OBlMkmsvrSy7JYg53WvDC8tVLxFt&q=${key_word}&limit=15&offset=0&rating=g&lang=en`
  )
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
      const { data } = res;
      const giffs = data.map((i) => {
        const url = i.images.downsized_medium.url;
        const { title, id } = i;
        return { title, url, id };
      });
      return giffs;
    });
};

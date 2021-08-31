const api__Key = "q1H2OBlMkmsvrSy7JYg53WvDC8tVLxFt";
const api__name = "morty";
export const GetGifs = async (props) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api__Key}&q=${api__name}&limit=10&offset=0&rating=g&lang=e`;
  return fetch(apiURL)
    .then((r) => r.json())
    .then((res) => {
      const { data } = res;
      const giffs = data.map((i) => {
        const { url } = i.images.downsized_medium;
        const { images, id, title } = i;
        return { url, id, title, images };
      });
      return giffs;
    });
};

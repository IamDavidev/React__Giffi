
import { useEffect, useState } from "react";
import GetGifs from "../services/GetGifs";

const Gif = (keyword) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    GetGifs({search : 'mexico'}).then((gifs) => setGifs(gifs));
  }, [keyword]);
  return gifs.map(({ title, url, id }) => (
    <div className="Card__gfs" key={id}>
      <h4>
        {title}
        <p>{id}</p>
        <img src={url} alt={title} key={id} />
      </h4>
    </div>
  ));
};

export default Gif;

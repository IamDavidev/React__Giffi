import "./Gif.css";
import { useEffect, useState } from "react";
import GetGifs from "../services/GetGifs";

const Gif = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    GetGifs({ search: keyword}).then((gifs) => setGifs(gifs));
  }, [keyword]);
  return gifs.map(({ title, url, id }) => (
    <div className="Card__gifs" key={id}>
      <h4> {title} </h4>
      <img lazy="load" src={url} alt={title} key={id} />
      <a href={url} target="__blank">
        GIF
      </a>
    </div>
  ));
};

export default Gif;

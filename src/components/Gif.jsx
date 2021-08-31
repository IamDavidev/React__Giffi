import { useEffect, useState } from "react";
import { GetGifs } from "../services/GetGifs";

export default function Gif(keyword) {
  const [gifs, setGifs] = useState([]);
  useEffect(
    function () {
      GetGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );
  return gifs.map(({ title, url, id }) => (
    <div className="">
      <h4>{title}</h4>
      <p> {id} </p>
      <img src={url} alt={title} key={id} />
    </div>
  ));
}

import "./Gif.css";
// import { useEffect, useState } from "react";
// import GetGifs from "../services/GetGifs";
import useGifs from "../hooks/useGifs";

const Gif = ({ params }) => {
  // console.log('-')
  const { keyword } = params;
  const gifs = useGifs({keyword})
  return gifs.map(({ title, url, id }) => (
    <div className="Card__gifs" key={id}>
      <h4> {title} </h4>
      <img loading='lazy'  src={url} alt={title} key={id} />
      <a href={url} target="__blank">
        GIF
      </a>
    </div>
  ));
};

export default Gif;

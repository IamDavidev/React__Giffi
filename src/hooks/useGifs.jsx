import { useState, useEffect } from "react";
import GetGifs from "../services/GetGifs";
const useGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    GetGifs({ search: keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);
  return gifs;
};

export default useGifs;

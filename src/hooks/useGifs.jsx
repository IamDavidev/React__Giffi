import { useState, useEffect } from "react";

import GetGifs from "../services/GetGifs";
const useGifs = ({ keyword } = { keyword: null }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    const keyLocalLast = keyword || localStorage.getItem("LastKey")|| 'mexico'
    GetGifs({ search: keyLocalLast }).then((gifs) => setGifs(gifs));
    localStorage.setItem("LastKey", keyword);
  }, [keyword]);
  return gifs;
};

export default useGifs;

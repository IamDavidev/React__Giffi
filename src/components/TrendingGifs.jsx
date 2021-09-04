import React, { useState, useEffect, useRef } from "react";
import GetTrendingGif from "../services/GetTrendingGif";
import Trending from "./Trending";

function TrendingsGifs() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    GetTrendingGif().then((trends) => setTrends(trends));
  }, [setTrends]);

  return <Trending options={trends} />;
}

const LazyTrending = () => {

  const [lazy, setLazy] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const onChange = (ent, observer) => {
      const elt = ent[0];
      // console.log(elt.isIntersecting)
      if (elt.isIntersecting) {
        setLazy(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(elementRef.current);
  });

  return <div ref={elementRef}> {lazy ? <TrendingsGifs /> : null}</div>;
};

export default LazyTrending;
//export default TrendingsGifs

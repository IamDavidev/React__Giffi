import { Route, useLocation } from "wouter";
import { useState } from "react";
import Gif from "../components/Gif";
import useGifs from "../hooks/useGifs";
import TrendingsGifs from "../components/TrendingGifs";
const Home = () => {
  // console.log('-')
  const [keyword, setkeyword] = useState("");
  const [path, setPush] = useLocation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPush(`/Gif/${keyword}`);
  };
  const handleChange = (evt) => {
    setkeyword(evt.target.value);
  };
  const gifs = useGifs({ keyword });
  return (
    <section className="App__section">
      <div className="nav__search">
        <h1>Gif App</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={keyword}
            placeholder="searc Giff"
          />
        </form>
      </div>
      <div className="section__gifs">
        <div className="App-content">
          <Route component={Gif} path={`/Gif/:keyword`} />
          <h2> Last search</h2>
          <Gif params={gifs} />
          {/* <GetTrendingGif /> */}
        </div>
        <div className="app__Category">
          <TrendingsGifs />
        </div>
      </div>
    </section>
  );
};

export default Home;

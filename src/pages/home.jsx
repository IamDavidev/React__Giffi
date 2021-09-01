import { Route, useLocation } from "wouter";
import { useState } from "react";
import Gif from "../components/Gif";
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

  return (
    <section className="App__section">
      <h1>Gif App</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
      </form>

      <div className="App-content">
        <Route
          component={Gif }
          path={`/Gif/:keyword`}
        />
      </div>
    </section>
  );
};

export default Home;

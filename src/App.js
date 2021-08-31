import { useState, useEffect } from "react";
import "./App.css";
import { GetGifs } from "./services/GetGifs";
function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    GetGifs().then((gifs) => setGifs(gifs));
  });
  return (
    <div className="App">
      <section className="App-content">
        <h1>using gifs api with react app</h1>

        <picture>
          {gifs.map((setisgif, i) => (
            <div className="App-content">
              <h4>{setisgif.title}</h4>
              <img src={setisgif.url} key={i} alt="imgenes in api giffs pro " />
              <h6>{setisgif.id}</h6>
            </div>
          ))}
        </picture>
      </section>
    </div>
  );
}

export default App;

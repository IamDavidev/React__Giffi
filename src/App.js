import "./App.css";
import Gif from "./components/Gif";
import { Route, Link } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>
          hola esta es la pagina principal de mi primera pagina web o aplicacion
          con React
        </h1>
        <Link
          to="/gif
        "
        >
          gifs
        </Link>

        <Route component={Gif} path="/gif" />
      </section>
    </div>
  );
}

export default App;

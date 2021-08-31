import "./App.css";
import Gif from "./components/Gif";
import { Route, Link } from "wouter";
import { Details } from "./components/Deatails";
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
        <Link to="/gif/details" >details or gif</Link>

        <Route component={Gif} path="/gif" />
        <Route component={Details} path='/gif/details' />
      </section>
    </div>
  );
}

export default App;

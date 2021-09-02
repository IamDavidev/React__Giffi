import "./App.css";
import DetailsContext from "./context/DetailsContext";
import Home from "./pages/home.jsx";

function App() {
  return (
    <DetailsContext.Provider value={{}}>
      <div className="App">
        <Home />
      </div>
    </DetailsContext.Provider>
  );
}

export default App;

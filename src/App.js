import logo from "./logo.svg";
import Rating from "./Rating";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="main">
        <Rating noOfStars={5} />
      </div>
    </div>
  );
}

export default App;

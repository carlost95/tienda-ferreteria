import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/itemListContainer";
import { NavBar } from "./components/navbar/navbar";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es nuestro Listing" />
    </div>
  );
};

export default App;

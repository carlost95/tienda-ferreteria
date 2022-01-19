import { NavBar } from "./components/navbar/Navbar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es nuestro Listing" />
    </div>
  );
};

export default App;

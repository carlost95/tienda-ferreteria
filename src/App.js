import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/itemListContainer";
import { NavBar } from "./components/navbar/navbar";
import { ItemDetailContainer } from "./components/itemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import Footer from "./pages/footer";
import { Catalogo } from "./pages/catalogo";

export const App = () => {
  return (
    <div className="App">
      {/* <NavBar />
      <ItemListContainer greeting="Este es nuestro Listing" />
      <ItemDetailContainer /> */}

      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/catalogo">
            <Catalogo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;

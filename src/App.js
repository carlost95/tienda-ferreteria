import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Catalogo } from "./pages/catalogo";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer/footer";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
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
        <Footer />
      </Router>
    </div>
  );
};

export default App;

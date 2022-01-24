import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/itemListContainer";
import { NavBar } from "./components/navbar/navbar";
import { ItemDetailContainer } from "./components/itemDetailContainer";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es nuestro Listing" />
      <ItemDetailContainer />
    </div>
  );
};

export default App;

import { NavBar } from "./components/navbar/Navbar";
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'

export const App = ()=> {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es nuestro Listing"/>
    </div>
  );
}

export default App;
import { NavBar } from "./components/navbar/navbar";
import {ItemListContainer} from './components/itemListContainer/itemListContainer'

export const App = ()=> {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Este es nuestro Listing"/>
    </div>
  );
}

export default App;
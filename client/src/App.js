import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom'
import { Detail, Home, Landing } from "./views";
import VideogameCreate from './components/VideogameCreate/VideogameCreate'
 



function App() {
  return (

<BrowserRouter>
      <div className="App">
      <Route exact path={"/"} render={() => <Landing />} />
        <Route exact path={"/home"} render={() => <Home />} />
        <Route exact path={"/home/:id"} render={() => <Detail />} />
        <Route exact path={'/videogame'} render={() => <VideogameCreate/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
  
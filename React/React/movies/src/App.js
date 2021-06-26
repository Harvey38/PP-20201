import Movies from './Components/Movies'
import About from './Components/About';
import Home from './Components/Home';
import Movie from './Components/Movie';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
  <>
  <BrowserRouter>
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/movies' component={Movies}/>
  <Route exact path='/about' component={About}/>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;

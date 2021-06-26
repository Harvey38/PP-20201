import Movies from './Components/Movies'
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
  <>
  
  <BrowserRouter>
  <Navbar/>
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/movies' component={Movies}/>
  {/* <Route exact path='/about' component={About}/> */}
  <Route path='/about' render={(props)=>{ return <About {...props} isAuth={true} />}}/>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;

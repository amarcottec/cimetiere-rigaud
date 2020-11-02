
import { Route, Switch} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/home'
import Error from './pages/Error'
import Monuments from './components/monumentList'
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/monuments/" component={Monuments} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

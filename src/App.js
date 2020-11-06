
import { Route, Switch} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/home'
import Error from './pages/Error'
import Monument from './components/monument/Monument'
import './App.scss';
import MonumentFullPage from './components/monument/MonumentFullPage'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/monument/" component={Monument} />
        <Route exact path="/monument/:slug/" component={MonumentFullPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

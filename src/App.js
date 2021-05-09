import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul className="magic-types">
                <li>
                  <Link className="App-link" to="/Mana">Mana</Link>
                </li>
                <li>
                  <Link className="App-link" to="/Bruxa">Bruxa</Link>
                </li>
                <li>
                  <Link className="App-link" to="/Animfluo">Animfluo</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/Mana">
                <Mana />
              </Route>
              <Route path="/Bruxa">
                <Bruxa />
              </Route>
              <Route path="/Animfluo">
                <Animfluo />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

function Mana() {
  return (
    <div>
      <h2>Mana</h2>
    </div>
  );
}

function Bruxa() {
  return (<div><h2>Bruxa</h2></div>);
}

function Animfluo() {
  return (<div><h2>Animfluo</h2></div>);
}

export default App;

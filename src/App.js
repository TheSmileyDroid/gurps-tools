import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
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
          <div>
            
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

class Mana extends Component {
  state = {
    nome: "Nome",
    description: "Descrição"
  }

  stateChange = (f) => {
    const {name, value} = f.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Mana</h2>
        <h1>{this.state.nome}</h1>
        <p>{this.state.description}</p>

        <br></br>
        <p> <label>Nome: </label><textarea name="nome" onChange={this.stateChange}/></p>
        <br/>
        <p> <label>Descrição: </label><textarea name="description" onChange={this.stateChange}/></p>
        <br/>
        <p>Efeito especial <input type="checkbox"/></p>
        <p>Dano: <input type="number" min="0" max="100"/> D + <input type="number" min="0" max="10"/></p>
      </div>
    );
  }
}


function Bruxa() {
  return (<div><h2>Bruxa</h2></div>);
}

function Animfluo() {
  return (<div><h2>Animfluo</h2></div>);
}

export default App;

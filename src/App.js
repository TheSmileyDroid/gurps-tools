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
    description: "Descrição",
    special: 0,
    dados: 0,
    add: 0,
  }

  stateChange = (f) => {
    const {name, value} = f.target;
    var fin = value
    if (name === "special") {
        if (f.target.checked) {
          fin = 1
        } else {
          fin = 0
        }
        console.log(f.target.checked)
    }
    this.setState({
      [name]: fin,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Mana</h2>
        <h1>{this.state.nome}</h1>
        <p>{this.state.description}</p>
        <p>Custo: {parseInt(this.state.special) + parseInt(this.state.dados) + parseInt( this.state.add/2)};</p>

        <br></br>
        <p> <label>Nome: </label><textarea name="nome" onChange={this.stateChange}/></p>
        <br/>
        <p> <label>Descrição: </label><textarea name="description" onChange={this.stateChange}/></p>
        <br/>
        <p>Efeito especial <input type="checkbox" name="special" onChange={this.stateChange}/></p>
        <p>Dano: <input type="number" min="0" max="100" name="dados" onChange={this.stateChange}/> D + <input type="number" min="0" max="10" name="add" onChange={this.stateChange}/></p>
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

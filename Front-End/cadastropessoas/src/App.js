import React, { Component } from 'react';
import NavBar from "./components/navBar/NavBar.jsx"
import PageListagem from "./components/pageListagem/PageListagem.jsx"
import Formulario from "./components/formulario/Formulario.jsx"
import BoaVinda from './components/BoasVindas/BoaVinda.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

  constructor() {
    super();
    this.state = {
      pessoas: [
        {
          email: "b.emanueandrade",
          nome: "Bruno Andrade",
          estado: "a"
        }
      ]
    }
  }

  criarPessoa(email, nome, estado) {
    const novaPessoa = { email, nome, estado };
    const novoArrayPessoas = [...this.state.pessoas, novaPessoa]
    const novoEstado = {
      pessoas: novoArrayPessoas
    }
    this.setState(novoEstado)
    console.log(this.state.pessoas)

  }

  render() {


    return (
      <>

        <NavBar />



        <Router>

          <Link to='/formulario'></Link>

          <Link to='/sobre'></Link>

          <Link to='/'></Link>

          <Link to='/pessoas'></Link>

          <Routes>
            <Route path='/pessoas' element={<PageListagem pessoas={this.state.pessoas} />} />
            <Route path='/formulario' element={<Formulario criarPessoa={this.criarPessoa.bind(this)} />} />
            <Route path='/' element={<BoaVinda />} />


          </Routes>
        </Router>

      </>

    );
  }
}

export default App;

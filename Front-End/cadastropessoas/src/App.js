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

  Url = "https://crudcadastropessoas.herokuapp.com/pessoas"

  UrlPost = "https://crudcadastropessoas.herokuapp.com/cadastro"

  state = {
    pessoas: []
  }

  componentDidMount() {
    fetch(this.UrlPost)
    .then(response => response.json())
    .then(pessoas => this.setState({ pessoas }))
    .catch(e => console.log(e))
  }

  criarPessoa = (pessoa) => {
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(pessoa),
      headers: new Headers({
        "content-type": "aplication/json"
      })
    };
    fetch(this.UrlPost, requestInfo)
    .then(response => response.json())
    .thent(newPessoa => console.log(newPessoa))
    .catch(e => console.log(e))
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
            <Route path='/formulario' element={<Formulario pessoaCreate={this.save} />} />
            <Route path='/' element={<BoaVinda />} />


          </Routes>
        </Router>

      </>

    );
  }
}

export default App;

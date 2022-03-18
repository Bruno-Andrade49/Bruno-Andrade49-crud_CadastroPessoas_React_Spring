import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar.jsx";
import Listagem from "../src/components/Listagem/Listagem.jsx"
import PaginaInicial from "../src/components/PaginaInicial/PaginaInicial.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Formulario from "./components/Formulario/Formulario.jsx";


function App() {

  const [dados, setDados] = useState([]);
  

  return (
    <section>
      <NavBar />

      <Router>

        <Link to="pessoas" />

        <Link to="/" />

        <Link to="/formulario" />

        <Routes>
          <Route path="/pessoas" element={<Listagem dados={dados} />} />
          <Route path="/formulario" element={<Formulario aoEnviar={aoEnviarForm}/>} />
          <Route path="/" element={<PaginaInicial />} />
          
        </Routes>


      </Router>

    </section>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;

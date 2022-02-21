import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import api from "../../services/api.js"
import {Button} from "reactstrap"
import "./style.css"

import 'bootstrap/dist/css/bootstrap.min.css';




class PageListagem extends Component {
  
    render() {

    
    return (
      <>


        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">CPF</th>
            </tr>
          </thead>
          <tbody>
            {this.props.pessoas.map((pessoa, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{pessoa.nome}</td>
                  <td>{pessoa.email}</td>
                  <td>{pessoa.cpf}</td>
                  <td>
                      <Button className="button_edit" color="info" size="sm"> Editar </Button>
                      <Button className= "button_delete" color="danger" size="sm"> Deletar </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>





      </>


    )
}
}

export default PageListagem;
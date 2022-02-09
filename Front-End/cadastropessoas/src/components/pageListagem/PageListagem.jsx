import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';




class PageListagem extends Component {



  render() {
    return (
      <>


        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Email</th>
              <th scope="col">Nome</th>
            </tr>
          </thead>
          <tbody>
            {this.props.pessoas.map((pessoa, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{pessoa.email}</td>
                  <td>{pessoa.nome}</td>
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
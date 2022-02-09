import React, { Component } from 'react';
import "./style.css"
import TituloFormulario from "./TituloFormulario"

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.email= "";
        this.nome= "";
        this.estado= "";
      }
  
    _criarPessoa(evento) {
        evento.preventDefault();
        this.props.criarPessoa(this.email, this.nome, this.estado);
    }

    _handleMudancaEmail(evento) {
        evento.stopPropagation();

        this.email = evento.target.value;
    }

    _handleMudancanome(evento) {
        evento.stopPropagation();

        this.nome = evento.target.value;
    }

    _handleMudancaEstado(evento) {

        this.estado = evento.target.value;
    }

        render() {
            return (
            <>
                <TituloFormulario />
                <form className="formulario" onSubmit={this._criarPessoa.bind(this)}>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input id='email' type="email" class="form-control" id="inputEmail3" 
                            onChange={this._handleMudancaEmail.bind(this)}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">nome</label>
                        <div class="col-sm-10">
                            <input id='nome' type="password" class="form-control" id="inputPassword3" 
                            onChange={this._handleMudancanome.bind(this)}/>
                        </div>
                    </div>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Posição</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Professor" checked 
                                onChange={this._handleMudancaEstado.bind(this)}/>
                                <label class="form-check-label" for="gridRadios1">
                                    Professor
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Aluno" 
                    />
                                <label class="form-check-label" for="gridRadios2">
                                    Aluno
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </>

        )
    }
}


export default Formulario;
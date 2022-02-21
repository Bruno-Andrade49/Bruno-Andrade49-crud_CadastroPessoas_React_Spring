import React, { Component } from 'react';
import "./style.css"
import TituloFormulario from "./TituloFormulario"

class Formulario extends Component {

    state = { 
        model:  {
            cpf: '', 
            email: '', 
            nome: ''
        }
    };

    setValues = (e, field) => {
        const {model} = this.state;
        model[field] = e.target.value;
        this.setState({model});
    }

    save = (pessoa) => {
        let data = {
            cpf : this.state.model.cpf,
            email: this.state.model.email,
            nome: this.state.model.nome
        };
        this.props.pessoaCreate(data);
    }


        render() {
            return (
            <>
                <TituloFormulario />
                <form className="formulario">
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Nome Completo</label>
                        <div class="col-sm-10">
                            <input id='name' class="form-control" placeholder="Digite seu nome..."
                            value={this.state.model.nome}
                            onChange={e => this.setValues(e, "nome")}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input id='email' type="email" class="form-control" id="inputEmail3" placeholder="Digite seu email..."
                            value={this.state.model.email}
                            onChange={e => this.setValues(e, "email")}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">CPF</label>
                        <div class="col-sm-10">
                            <input id='nome' class="form-control" placeholder="Digite seu CPF..."
                            value={this.state.model.cpf}
                            onChange={e => this.setValues(e, "cpf")}/>
                        </div>
                    </div>

                </form>
                <button class="btn btn-primary" block onClick={this.create}> Salvar </button>


            </>

        )
    }
}


export default Formulario;
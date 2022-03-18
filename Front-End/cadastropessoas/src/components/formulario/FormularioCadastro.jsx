import React, { useState, } from 'react';
import { Button, Container, Switch, FormControlLabel } from '@mui/material';
import "./style.css"
import '@fontsource/roboto/300.css';




const FormularioCadastro = ( {aoEnviar} ) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [estado, setEstado] = useState('Aluno');

    const handleSubmit = (e) => {
        e.preventDefault();
        aoEnviar({nome, email, cpf, estado})
    }

    return (
        <>
            <Container maxWidth="sm" className="formulario">
                <form onSubmit={handleSubmit}>
                   
                    <div
                        className="row mb-3" margin="normal">
                        <label
                            className="col-sm-2 col-form-label">
                            Nome</label>
                        <div className="col-sm-10">
                            <input
                                value={nome}
                                id='name'
                                className="form-control"
                                placeholder="Digite seu nome completo..."
                                required



                                onChange={(event) => {

                                    const tmpNome = event.target.value;

                                    setNome(tmpNome)
                                }}

                            />
                        </div>
                    </div>
                    <div
                        className="row mb-3" margin="normal">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Digite seu email..."
                                required

                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                        </div>
                    </div>
                    <div className="row mb-3" margin="normal">
                        <label className="col-sm-2 col-form-label">CPF</label>
                        <div className="col-sm-10">
                            <input
                                pattern="[0-9]+$"
                                value={cpf}
                                id='nome'
                                className="form-control"
                                placeholder="Digite seu CPF..."
                                required
                                onChange={(event) => {

                                    let cpfTeste = event.target.value
                                    if (cpfTeste.length >= 13) {
                                        cpfTeste = cpfTeste.substring(0, 12)
                                    } else if (typeof parseInt(cpfTeste) !== 'number') {
                                        alert("CPF só contém numeros!")
                                        cpfTeste = cpfTeste.substring(0, 1)
                                    }
                                    setCpf(cpfTeste)

                                }} />
                        </div>
                    </div>
                    <div>
                        <FormControlLabel
                            label="Professor"
                            control={<Switch name="verificarestado" defaultchecked={estado} color="primary"
                                onChange={(event) => {
                                    var condition = event.target.checked;
                                    if (condition === false) {
                                        setEstado("Aluno");
                                    } else {
                                        setEstado("Professor")
                                    }
                                }}
                            />
                            }>

                        </FormControlLabel>



                    </div>
                    <div margin="normal">
                        <Button type="submit" variant="contained" fullWidth={true} className="Button" input>
                            Enviar
                        </Button>
                    </div>

                </form>
            </Container>

        </>
    )
}

export default FormularioCadastro;
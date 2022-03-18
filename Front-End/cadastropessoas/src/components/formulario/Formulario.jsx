import React, { useEffect, useState } from "react";
import FormularioCadastro from "./FormularioCadastro";
import FormularioEndereco from "../Formulario/FormularioEndereco";
import Titulo from "../title/Titulo"
import { Typography, Stepper, Step, StepLabel, Container  } from "@mui/material";





function Formulario({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState([]);

    const formularios = [
        <FormularioCadastro aoEnviar={coletarDados} />,
        <FormularioEndereco aoEnviar={coletarDados} naoEnviar={voltar} />,
        
        <Typography variant='h5'>Obrigado pelo Cadastro!!</Typography>,

    ]

    useEffect(() => {
        if(etapaAtual > 1) {
            aoEnviar(dadosColetados)
            
        }
    })

    


    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    function voltar() {
        setEtapaAtual(etapaAtual - 1)
    }

    function coletarDados(dados){
        setDadosColetados({...dadosColetados, ...dados})
        proximo();
    }

    return (
        <>
            <Titulo/>
            <Container maxWidth="sm">
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel> Login </StepLabel>
                </Step>
                <Step>
                    <StepLabel> Endereço </StepLabel>
                </Step>   
                <Step>
                    <StepLabel> Finalização </StepLabel>
                </Step>   
                
            
            </Stepper>
            {formularios[etapaAtual]}
            </Container>
        </>
    );


}

export default Formulario;
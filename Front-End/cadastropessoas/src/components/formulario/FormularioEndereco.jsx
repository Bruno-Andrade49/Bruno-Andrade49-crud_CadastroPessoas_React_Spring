import React,{ useState} from 'react';
import { Button, TextField, Container } from '@mui/material';




const FormularioEndereco = ({aoEnviar, naoEnviar})=> {

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");


  function handleSubmit(e)  {
    e.preventDefault();
    const pessoa = {cep, endereco, numero, estado, cidade}
    aoEnviar(pessoa)
    

  }
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          id="cep"
          label="CEP"
          type="number"
          variant="outlined"
          required
          margin="normal"
          onChange={(e)=> {
            const cepParse = e.target.value
            setCep(cepParse)
          }}

        />
        <TextField
          id="endereco"
          label="Enderço"
          type="text"
          variant="outlined"
          required
          margin="normal"
          fullWidth
          onChange={(e)=> {
            const enderecoParse = e.target.value
            setEndereco(enderecoParse)
          }}
        />
        <TextField
          id="numero"
          label="Numero"
          type="number"
          variant="outlined"
          required
          margin="normal"
          onChange={(e)=> {
            const numeroParse = e.target.value
            setNumero(numeroParse)
          }}

        />
        <TextField
          id="estado"
          label="Estado"
          type="text"
          variant="outlined"
          required
          margin="normal"
          onChange={(e)=> {
            const estadoParse = e.target.value;
            setEstado(estadoParse)
          }}

        />
        <TextField
          id="cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          required
          margin="normal"
          onChange={(e)=> {
            const cidadeParse = e.target.value
            setCidade(cidadeParse)
          }}

        />
        <br></br>

        <Button type="submit" variant="contained" fullWidth={true} className="Button">
          Finalizar Cadastro
        </Button>
        <Button type="text" variant="contained" fullWidth={true} className="Button" color="secondary"
        onClick={naoEnviar}> 
          Voltar 
        </Button>
      </form>
    </Container>
  )
}

export default FormularioEndereco;
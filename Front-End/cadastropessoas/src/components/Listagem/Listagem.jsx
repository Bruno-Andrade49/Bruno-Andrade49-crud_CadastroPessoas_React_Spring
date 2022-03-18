import {Button} from "reactstrap"



function Listagem(props) {

return (
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Index</th>
        <th scope="col">Nome</th>
        <th scope="col">Email</th>
        <th scope="col">CPF</th>
        <th scope="col">Posição</th>
      </tr>
    </thead>
    <tbody>
      {props.dados.map((pessoa, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{pessoa.nome}</td>
            <td>{pessoa.email}</td>
            <td>{pessoa.cpf}</td>
            <td>{pessoa.estado}</td>
            <td>
                <Button className="button_edit" color="info" size="sm"> Editar </Button>
                <Button className= "button_delete" color="danger" size="sm"> Deletar </Button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
}

export default Listagem;
   
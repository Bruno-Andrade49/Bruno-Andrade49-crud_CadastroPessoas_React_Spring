import axios from "axios";

const api = axios.create({
    
    baseURL: 'https://crudcadastropessoas.herokuapp.com'
})


export default api;
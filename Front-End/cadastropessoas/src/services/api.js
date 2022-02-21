import axios from 'axios'

const api = axios.create({
    baseURL: 'https://crudcadastropessoas.herokuapp.com/'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data);
}

export default api;
import axios from "axios"
import { address } from "../types"

export const getAddress = async (cep: string): Promise<address | null> => {

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const {logradouro, bairro, localidade, uf} = response.data
        return {logradouro, bairro, localidade, uf}
    } catch (error) {
        console.log(error)
        return null
    }
}
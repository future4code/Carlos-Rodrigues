export type user = {
   id: string
   name: string
   nickname: string
   email: string
   address: string
}

export type address = {
   logradouro: string
   bairro: string
   localidade: string
   uf: string
}

export type userAddress = {
   id: string,
   cep: string,
   numero: number,
   logradouro: string
   bairro: string
   localidade: string
   uf: string
}


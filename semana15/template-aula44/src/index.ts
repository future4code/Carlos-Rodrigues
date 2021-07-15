import { app } from './app'
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserByName } from './endpoints/getUserByName'

// Exercício 1:
//a) Para buscar items com um endpoint devemos usar o métodos GET.
//b) Como se trata de uma lista de usuários, um bom nome para entidade é "/users"

//Exercício 2:
//a) O type foi passado para a requisição via query params, por ser um tipo de pesquisa "opcional"
//b) Realizando validações através de lógica usando if e else.

app.get("/users", getAllUsers )


//Exercício 3:
//a) Para esse exercício eu utilizei o path params.

app.get("/users/:name", getUserByName)
import app from "./app"
import addAddress from "./endpoints/addAddress"
import createUser from './endpoints/createUser'
import { getAddress } from "./services/getAddress"

app.post('/users/signup', createUser)

app.post('/users/address', addAddress)
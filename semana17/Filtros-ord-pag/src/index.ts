import { app } from "./app";
import getUserByType from "./endpoints/getUserByType";
import { getUsers } from "./endpoints/getUsers";

app.get('/user', getUsers)

app.get('/user/:type', getUserByType)


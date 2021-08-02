import app from "./app";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getAllUsers from "./endpoints/getAllUsers";
import getUserById from "./endpoints/getUserById";

app.get('/user', getAllUsers)

app.post('/user', createUser)

app.get('/user/:id', getUserById)

app.put('/user/edit/:id', editUser)
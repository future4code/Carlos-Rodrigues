import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";


app.post('/createuser', createUser)
app.post('/user/login', login)
import { app } from "./app";
import createProduct from "./endpoints/createProduct";
import createTrip from "./endpoints/createTrip";
import createUser from "./endpoints/createUser";
import getAllUsers from "./endpoints/getAllUsers";

app.get('/user', getAllUsers )
app.post('/user', createUser)

app.post('/product', createProduct)

app.post('/trip', createTrip)

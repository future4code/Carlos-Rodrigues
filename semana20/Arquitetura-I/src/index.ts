import { app } from "./app";
import { getAllUsersController } from "./controller/getAllUsersController";
import { loginController } from "./controller/loginController";
import { signupController } from "./controller/signupController";

app.post("/signup", signupController);
app.post("/login", loginController);


app.get("/all", getAllUsersController)
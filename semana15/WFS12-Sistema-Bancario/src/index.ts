import { app } from "./app";
import { createAccount } from "./endpoints/createAccount";
import { getUser } from "./endpoints/getUser";

app.get("/users", getUser)

app.post("/users", createAccount)

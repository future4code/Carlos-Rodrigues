import { app } from "./app";
import { createRecipe } from "./endpoints/recipes/createRecipe";
import { getOwnProfile } from "./endpoints/users/getOwnProfile";
import { getRecipeById } from "./endpoints/recipes/getRecipeById";
import { getUserById } from "./endpoints/users/getUserById";
import { login } from "./endpoints/users/login";
import { signup } from "./endpoints/users/signup";

app.post("/user/signup", signup);
app.post("/user/login", login);

app.get("/user/:id", getUserById);
app.get("/user", getOwnProfile);

app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipeById);

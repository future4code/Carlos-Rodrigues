import app from "./app";
import { postsRouter } from "./routes/postRouter";
import { usersRouter } from "./routes/userRoutes";

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

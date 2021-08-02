import app from "./app";
import createClass from "./endpoints/createClass";
import createStudent from "./endpoints/createStudent";

app.post('/class', createClass)

app.post('/student', createStudent)

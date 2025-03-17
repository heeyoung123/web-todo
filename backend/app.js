const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv').config();

const port = process.env.PORT;

console.log(port);
app.listen(port);

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const todosRouter = require('./routes/todos');
const teamsRouter = require('./routes/teams');

app.use(cookieParser());
app.use("/users", userRouter);
app.use("/todos", todosRouter);
app.use("/teams", teamsRouter);
app.use("/", indexRouter);

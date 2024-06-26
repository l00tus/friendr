const express = require('express');
const app = express();

const usersRouter = require('./routers/users.router');

app.use(express.json());
app.use('/users', usersRouter);


const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
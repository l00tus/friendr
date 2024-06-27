const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

//Routes
const usersRouter = require('./routers/users.router');
const postsRouter = require('./routers/posts.router');
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


const port = 3000;

app.listen(port, () => {
  console.log(`Friendr listening on port ${port}`);

  mongoose
    .connect('REDACTED')
    .then(() => {
      console.log("Connected to DB and listening")
    })
    .catch((err) => console.log(err)); 
});
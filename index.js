const express = require('express');
const app = express();

const PATH = 3000;
const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user', function (req, res) {
  users.push(req.body);
  res.json(req.body);
});

app.put("/user/:id", function (req, res) {
  const idOfUser = parseInt(req.params.id);
  const userIdx = users.findIndex((user) => user.id === idOfUser);
  console.log(idOfUser)
  if (userIdx !== -1) {
    const oldUser = users[userIdx];
    users[userIdx] = { ...oldUser, ...req.params };
    res.json(users[userIdx]);
  } else {
    res.status(404).json();
  }
});

app.delete('/user/:id', function (req, res) {
  const idOfUser = parseInt(req.params.id);
  users = users.filter((user) => user.id !== idOfUser);
  res.json(users);
});

app.get('/user', function (req, res) {
 res.json(users);
});
app.get('/user/:id', function (req, res) {
 res.json(users);
});

app.listen(PATH,function(){
    console.log("Successfully work")
})
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/hackaton', {
  useNewUrlParser: true,
});

let dbClient;
console.log(__dirname);
app.use(
  express.static('/Users/Sofiya/Desktop/Hackaton/gazprom_messenger/index.js'),
);

mongoClient.connect(function(err, client) {
  if (err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db('hackaton').collection('hackaton');
  app.listen(3000, function() {
    console.log('Сервер ожидает подключения...');
  });
});

app.post('/api/ideas', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);

  const userName = req.body.name;
  const userAge = req.body.age;
  const user = {name: userName, age: userAge};

  const collection = req.app.locals.collection;
  collection.insertOne(user, function(err, result) {
    if (err) return console.log(err);
    res.send(user);
  });
});

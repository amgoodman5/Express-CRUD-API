const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

app.get('/14er', function (req, res) {
  knex('14er_db').then((test) =>{
    res.json(test)
  });

});

app.get('14er/:id', function(req, res){
let id = req.params.id;
  knex('14er_db').where('id', id)
  .first()
    .then((data) => {
      res.json(data);
    });
  });


const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
})

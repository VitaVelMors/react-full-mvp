import express from 'express';
import cors from 'cors';
import pg from 'pg';
import Config from './config.js'; [process.env.NODE_ENV ||"dev"]


// const config = require('..config.json')[process.env.NODE_ENV ||"dev"]

const { Pool } = pg;
const pool = new Pool({connectionString:Config.connectionString})
const app  = express();
const port = 5000


//middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send("Hello World I'm coming in hot!");
});

//GET all

app.get('/characters', (req, res) => {
  pool
    .query(`SELECT * FROM characters`)
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`Table Not Found`);
      } else {
        res.status(200).send(result.rows);
      }
    })
});

//GET one

app.get('/characters/:id', (req, res) => {
  pool
    .query(`SELECT * FROM characters WHERE id = $1`, [req.params.id])
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`There is no character matching that description`);
      } else {
        res.status(200).send(result.rows);
      }
    })
});

//POST

app.post('/characters', (req, res) => {
  let character = req.body;
  let name = character.name;
  let year =  character.year;
  pool
    .query(`INSERT INTO characters (name, year) 
    VALUES('${name}', '${year}') RETURNING *`)
    .then(result => {
      if (result.rows.length === 0){
        res.status(417).send(`Expectation: 'I added a new character' Reality: 'I failed to add a new character'`);
      } else {
        res.status(201).send(result.rows[0]);
      }
    })
});

//UPDATE

app.patch('/characters/:id', (req, res) => {
  pool
    .query(`UPDATE characters SET ${Object.keys(req.body)[0]} = '${Object.values(req.body)[0]}' WHERE id = $1 RETURNING *`, [req.params.id])
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`There is no character matching that description`);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
});

//DELETE

app.delete('/characters/:id', (req, res) => {
  pool
    .query(`DELETE FROM characters WHERE id = $1 RETURNING *`, [req.params.id])
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`There is no character matching that description`);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
});










app.listen(port, () => {
  console.log(`I'm watching you on port ${port}`)
})


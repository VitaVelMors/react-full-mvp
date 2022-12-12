import express from 'express';
import cors from 'cors';
import pool from './config.js'; [process.env.NODE_ENV || "dev"];

// const corsOptions={
//   // origin: 'https://scout-tracker-live.onrender.com/'
//   origin: 'http://127.0.0.1:5500/galvanize_Learn/scout_tracker/frontend/public/index.html',
//   optionSuccessStatus: 200
// };



const app  = express();
const port = 5000


//middleware
app.use(cors());
app.use(express.json());

// Hello World

app.get('/', (req, res) => {
  res.send("Hello World I'm coming in hot!");
});

//GET all

app.get('/scouts', (req, res) => {
  pool
    .query(`SELECT * FROM scouts`)
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`Table Not Found`);
      } else {
        res.status(200).send(result.rows);
      }
    })
});

//GET one

app.get('/scouts/:id', (req, res) => {
  pool
    .query(`SELECT * FROM scouts WHERE id = $1`, [req.params.id])
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`There is no scout matching that description`);
      } else {
        res.status(200).send(result.rows);
      }
    })
});

//POST

app.post('/scouts', (req, res) => {
  let scout = req.body;
  let name = scout.name;
  let age =  scout.age;
  let gender = scout.gender
  pool
    .query(`INSERT INTO scouts (name, age, gender) 
    VALUES('${name}', '${age}', '${gender}') RETURNING *`)
    .then(result => {
      if (result.rows.length === 0){
        res.status(417).send(`Expectation: 'I added a new scout' Reality: 'I failed to add a new scout'`);
      } else {
        res.status(201).send(result.rows[0]);
      }
    })
});

//UPDATE

app.patch('/scouts/:id', (req, res) => {
  pool
    .query(`UPDATE scouts SET ${Object.keys(req.body)[0]} = '${Object.values(req.body)[0]}' WHERE id = $1 RETURNING *`, [req.params.id])
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`There is no scout matching that description`);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
});

//DELETE

app.delete('/scouts/:id', (req, res) => {
  pool
    .query(`DELETE FROM scouts WHERE id = $1 RETURNING *`, [req.params.id])
    .then(result => {
      if (result.rows.length === 0){
        res.status(404).send(`There is no scout matching that description`);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
});


app.listen(port, () => {
  console.log(`You're being watched on port ${port}`)
})


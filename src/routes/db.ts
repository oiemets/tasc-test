import { Router } from 'express';
import db from '../database';
import { createTablesQuery } from '../queries/createTables.query';
import { query } from '../utils/query';
import { DB_NAME } from '../constants/dbName';

const router = Router();

router.use((req, res, next) => {
  console.log('Req made to /db route')
  next();
})

router.post('/create', (req, res) => {

  db.connect((err) => {
    if (err) {
      throw err
    }
    console.log('Connected to the database!')

    db.query(`CREATE DATABASE ${DB_NAME}`, (err) => {
      if (err) {
        res.send({ ...err})
        throw err
      }
      
      console.log(`Database ${DB_NAME} created successfully`);
  
      db.query(`
          USE ${DB_NAME};
          ${createTablesQuery} 
          ${query}
        `,
  
        (err, results) => {
        
        if (err) {
          res.send({ ...err })
          throw err
        }
          
          return res.status(201).send({ ...results });
      })
    })
  })
});

router.post('/account/update', (req, res) => {
  const { clientTypeName, individualName } = req.body;

  if (clientTypeName) {
    db.query(`
      USE ${DB_NAME};
      UPDATE Account
      SET clientTypeName = '${clientTypeName}'`, (err, results) => {
      if (err) {
        throw err
      }
      res.status(201).send({ results });
    })
  }

  if (individualName) {
    db.query(`
      USE ${DB_NAME};
      UPDATE Account
      SET individualName = '${individualName}'
      WHERE individualId IN
        (SELECT id
        FROM Individual
          WHERE clientId IN 
          (SELECT id
          FROM Client
          WHERE name = 'ClientName1' OR name = 'ClientName2'))
    `, (err, results) => {
      if (err) {
        throw err
      }
      res.status(201).send({ results });
    })
  }
})

export default router;
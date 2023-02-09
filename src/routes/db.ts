import { Router } from 'express';
import db from '../database';
import { createTablesQuery } from '../queries/createTables.query';
import { getQuery } from '../utils/getQuery';

const router = Router();

router.use((req, res, next) => {
  console.log('Req made to /db route')
  next();
} )

router.get('/create', (req, res) => {
  db.query(`CREATE DATABASE ${process.env.DB_NAME}`, (err) => {
    if (err) {
      res.send({ ...err})
      throw err
    }
    
    console.log(`Database ${process.env.DB_NAME} created successfully`);

    db.query(`
        USE ${process.env.DB_NAME};
        ${createTablesQuery} 
        ${getQuery()}
      `,

      (err, results) => {
      
      if (err) {
        res.send({ ...err })
        throw err
      }
        
        return res.status(201).send({ ...results });
    })
  })
});

router.post('/account/update', (req, res) => {
  const { clientTypeName, individualName } = req.body;

  if (clientTypeName) {
    db.query(`
      USE ${process.env.DB_NAME};
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
      USE ${process.env.DB_NAME};
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
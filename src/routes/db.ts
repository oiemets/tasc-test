import { Router } from 'express';
import db from '../database';
import { createTablesQuery } from '../queries/createTables.query';
import { getQuery } from '../utils/getQuery';

const router = Router();

router.get('/create', (req, res) => {
  db.query(`CREATE DATABASE ${process.env.DB_NAME}` , (err) => {
    if (err) {
      res.json({msg: err})
      throw err
    }

    console.log(`Database ${process.env.DB_NAME} created successfully`);

    db.query(`USE ${process.env.DB_NAME}` , (err) => {
      if (err) {
        res.json({ msg: err })
        throw err
      }

      db.query(`${createTablesQuery} ${getQuery()}`);

      console.log(`Using database: ${process.env.DB_NAME}`);
      
      return res.sendStatus(200)
    })

  })


})

export default router;
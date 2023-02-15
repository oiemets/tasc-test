import { Request, Response } from "express";
import db from '../database';
import { createAndFillOutTablesQuery } from "../queries/createAndFillOutTablesQuery";
import { createDatabase } from "../queries/createDatabase";

export const getCreateDbController = (req: Request, res: Response) => {
  db.connect((err) => {
    if (err) {
      throw err
    }
    db.query(createDatabase, (err) => {
      if (err) {
        res.send({ ...err})
        throw err
      }
      db.query(createAndFillOutTablesQuery,
        (err, results) => {
        if (err) {
          res.send({ ...err })
          throw err
        }
        return res.status(201).send({ results });
      })
    })
  })
}
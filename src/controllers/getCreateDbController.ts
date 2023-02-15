import type { Request, Response } from "express";
import db from '../database';
import { createAndFillOutTablesQuery } from "../queries/createAndFillOutTablesQuery";
import { createDatabase } from "../queries/createDatabase";

export const getCreateDbController = (req: Request, res: Response) => {
  db.connect((err) => {
    if (err) {
      res.status(500).send({ ...err })
    } else {
      db.query(createDatabase, (err) => {
        if (err) {
          res.status(500).send({ ...err })
        } else {
          db.query(createAndFillOutTablesQuery,
            (err, results) => {
            if (err) {
              res.status(500).send({ ...err })
            } else {
              res.status(201).send({ results });
            }
          })
        }
      })
    }
  })
}
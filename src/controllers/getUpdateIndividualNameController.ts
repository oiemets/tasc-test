import type { Request, Response } from "express";
import db from '../database';
import { updateAccountIndividualNameQuery } from "../queries/updateAccountIndividualNameQuery";

export const getUpdateIndividualNameController = (req: Request, res: Response) => {
  const { individualName } = req.body;

  if (individualName) {
    db.query(updateAccountIndividualNameQuery(individualName), (err, results) => {
      if (err) {
        res.status(500).send({...err})
      } else {
        res.status(201).send({ results });
      }
    })
  } else {
    res.status(400).send({ msg: 'Error! Missing individualName field' })
  }
}
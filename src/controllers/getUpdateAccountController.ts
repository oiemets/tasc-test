import { Request, Response } from "express";
import db from '../database';
import { updateAccountClientTypeNameQuery } from "../queries/updateAccountClientTypeNameQuery";
import { updateAccountIndividualNameQuery } from "../queries/updateAccountIndividualNameQuery";

export const getUpdateAccountController = (req: Request, res: Response) => {
  const { clientTypeName, individualName } = req.body;

  if (clientTypeName) {
    db.query(updateAccountClientTypeNameQuery(clientTypeName), (err, results) => {
      if (err) {
        throw err
      }
      res.status(201).send({ results });
    })
  }

  if (individualName) {
    db.query(updateAccountIndividualNameQuery(individualName), (err, results) => {
      if (err) {
        throw err
      }
      res.status(201).send({ results });
    })
  }
}
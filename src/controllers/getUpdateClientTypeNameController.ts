import type { Request, Response } from "express";
import db from '../database';
import { updateAccountClientTypeNameQuery } from "../queries/updateAccountClientTypeNameQuery";

export const getUpdateClientTypeNameController = (req: Request, res: Response) => {
  const { clientTypeName } = req.body;
  if (clientTypeName) {
    db.query(updateAccountClientTypeNameQuery(clientTypeName), (err, results) => {
      if (err) {
        res.status(500).send({ ...err });
      } else {
        res.status(201).send({ results });
      }
    })
  } else {
    res.status(400).send({ msg: 'Error! clientTypeName field missing' })
  }
}
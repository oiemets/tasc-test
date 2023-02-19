import type { RequestHandler } from "express";
import { updateAccountClientTypeNameQuery } from "../queries/updateAccountClientTypeNameQuery";
import { query } from '../database';

export const getUpdateClientTypeNameController: RequestHandler = async (req, res, next) => {
  const { clientTypeName } = req.body;
  if (clientTypeName) {
    try {
      const result = await query(updateAccountClientTypeNameQuery(clientTypeName));
      res.status(200).send({ result });
    } catch(err) {
      next(err);
    }
  } else {
    res.status(400).send({ msg: 'error! clientTypeName is missing!' })
  }
}
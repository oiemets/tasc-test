import type { RequestHandler } from "express";
import { updateAccountIndividualNameQuery } from "../queries/updateAccountIndividualNameQuery";
import { query } from '../database';

export const getUpdateIndividualNameController: RequestHandler = async (req, res, next) => {
  const { individualName } = req.body;
  if (individualName) {
    try {
      const result = await query(updateAccountIndividualNameQuery(individualName))
      res.status(200).send({ result });
    } catch(err) {
      next(err)
    }
  } else {
    res.status(400).send({ msg: 'Error! individualName is missing' })
  }
}
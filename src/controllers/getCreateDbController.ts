import type { RequestHandler } from "express";
import { createDatabase } from "../queries/createDatabase";
import { query } from '../database';
import { createTablesQuery } from "../queries/createTables";

export const getCreateDbController: RequestHandler = async (req, res, next) => {
  try {
    await query(createDatabase);
    const result = await query(createTablesQuery);
    res.status(201).send({ result });
  } catch (err) {
    next(err)
  }
}
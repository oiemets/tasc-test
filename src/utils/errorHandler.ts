import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`Error ${err.message}`);
  const status = err.status || 400;
  res.status(status).send({ msg: err.message });
}
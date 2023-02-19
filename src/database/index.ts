import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db.config';

export const query = async (query: string) => {
  const connection = await mysql.createConnection(dbConfig);
  const result = await connection.query(query);
  return result;
}
import { DB_NAME } from "../constants/dbName";
import { getCreateDatabaseQuery } from "../utils/getCreateDatabaseQuery";

export const createDatabase = getCreateDatabaseQuery(DB_NAME || '');
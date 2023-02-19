import { DB_NAME, TABLES } from "../constants";

export const updateAccountClientTypeNameQuery = (clientTypeName: string) => `
  USE ${DB_NAME};
  UPDATE ${TABLES.ACCOUNT}
  SET clientTypeName = '${clientTypeName}'
`
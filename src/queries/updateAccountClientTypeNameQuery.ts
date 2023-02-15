import { ACCOUNT } from "../constants/tables";
import { useDatabase } from "./useDatabase";

export const updateAccountClientTypeNameQuery = (clientTypeName: string) => `
  ${useDatabase}
  UPDATE ${ACCOUNT}
  SET clientTypeName = '${clientTypeName}'
`
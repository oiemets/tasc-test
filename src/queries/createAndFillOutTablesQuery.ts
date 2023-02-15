import { useDatabase } from "./useDatabase";
import { createTablesQuery } from "./createTables";
import { tablesValues } from "../utils/getTablesValues";

export const createAndFillOutTablesQuery = `
  ${useDatabase}
  ${createTablesQuery}
  ${tablesValues}
`
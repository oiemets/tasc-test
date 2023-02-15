import { ACCOUNT, CLIENT, INDIVIDUAL } from "../constants/tables";
import { useDatabase } from "./useDatabase";

export const updateAccountIndividualNameQuery = (individualName: string) => `
  ${useDatabase}
  UPDATE ${ACCOUNT}
  SET individualName = '${individualName}'
  WHERE individualId IN (
    SELECT individual.id
    FROM ${INDIVIDUAL}
    JOIN ${CLIENT}
    ON ${INDIVIDUAL}.clientId = client.id
    WHERE ${CLIENT}.name = 'ClientName1' OR ${CLIENT}.name = 'ClientName2'
  )
`
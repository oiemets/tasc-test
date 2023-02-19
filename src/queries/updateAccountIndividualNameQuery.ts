import { DB_NAME, TABLES } from "../constants";

export const updateAccountIndividualNameQuery = (individualName: string) => `
  USE ${DB_NAME};
  UPDATE ${TABLES.ACCOUNT}
  SET individualName = '${individualName}'
  WHERE individualId IN (
    SELECT individual.id
    FROM ${TABLES.INDIVIDUAL}
    JOIN ${TABLES.CLIENT}
    ON ${TABLES.INDIVIDUAL}.clientId = client.id
    WHERE ${TABLES.CLIENT}.name = 'ClientName1' OR ${TABLES.CLIENT}.name = 'ClientName2'
  )
`
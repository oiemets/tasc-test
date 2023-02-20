import { DB_NAME, TABLES } from '../constants';
import { clientTypes, clients, individuals, accounts } from '../utils/getTablesItems';

const createTables = [
  {
    name: TABLES.CLIENT_TYPE,
    columns: [
      'id INT PRIMARY KEY AUTO_INCREMENT',
      'name VARCHAR(50)'
    ],
    fieldsToInsert: '(id, name)',
    items: clientTypes.map(({ id, name }) => `(${id}, '${name}')`)
  },
  {
    name: TABLES.CLIENT,
    columns: [
      'id INT PRIMARY KEY AUTO_INCREMENT',
      'name VARCHAR(50)',
      'clientTypeId INT',
      `FOREIGN KEY (clientTypeId) REFERENCES ${TABLES.CLIENT_TYPE}(id)`
    ],
    fieldsToInsert: '(id, name, clientTypeId)',
    items: clients.map(({ id, name, clientTypeId }) => `(${id}, '${name}', ${clientTypeId})`)
  },
  {
    name: TABLES.INDIVIDUAL,
    columns: [
      'id INT PRIMARY KEY AUTO_INCREMENT',
      'clientId INT',
      'name VARCHAR(50)',
      `FOREIGN KEY (clientId) REFERENCES ${TABLES.CLIENT}(id)`
    ],
    fieldsToInsert: '(id, clientId, name)',
    items: individuals.map(({ id, clientId, name }) => `(${id}, '${clientId}', '${name}')`)
  },
  {
    name: TABLES.ACCOUNT,
    columns: [
      'id INT PRIMARY KEY AUTO_INCREMENT',
      'individualId INT',
      'name VARCHAR(50)',
      'individualName VARCHAR(50)',
      'clientTypeName VARCHAR(50)',
      `FOREIGN KEY (individualId) REFERENCES ${TABLES.INDIVIDUAL}(id)`
    ],
    fieldsToInsert: '(individualId, name)',
    items: accounts.map(({ individualId, name }) => `(${individualId}, '${name}')`)
  }
]
  .map(({
    name,
    columns,
    fieldsToInsert,
    items
  }) => `
    CREATE TABLE ${name} (${columns.join(',')});
    INSERT INTO ${name} ${fieldsToInsert}
    VALUES ${items.join(',')};
  `).join('');

export const createTablesQuery = `USE ${DB_NAME}; ${createTables}`;
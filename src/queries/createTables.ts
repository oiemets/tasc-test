import { DB_NAME, TABLES } from '../constants';
import { tablesItems } from '../utils/getTablesItems';

export const createTables = [
  {
    name: TABLES.CLIENT_TYPE,
    columns: [
      'id INT PRIMARY KEY AUTO_INCREMENT',
      'name VARCHAR(50)'
    ]
  },
  {
    name: TABLES.CLIENT,
    columns: [
      'id INT PRIMARY KEY AUTO_INCREMENT',
      'name VARCHAR(50)',
      'clientTypeId INT',
      `FOREIGN KEY (clientTypeId) REFERENCES ${TABLES.CLIENT_TYPE}(id)`
    ]
  },
  {
    name: TABLES.INDIVIDUAL,
    columns: [
      'id INT PRIMARY KEY AUTO_INCREMENT',
      'clientId INT',
      'name VARCHAR(50)',
      `FOREIGN KEY (clientId) REFERENCES ${TABLES.CLIENT}(id)`
    ]
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
    ]
  }
]
  .map(({
    name,
    columns
  }) => `CREATE TABLE ${name} (${columns.join(',')});`).join('');

export const createTablesQuery = `
  USE ${DB_NAME};
  ${createTables}
  ${tablesItems}
`
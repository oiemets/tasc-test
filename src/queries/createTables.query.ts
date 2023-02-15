import { CLIENT_TYPE, CLIENT, INDIVIDUAL, ACCOUNT } from '../constants/tables';

export const createTablesQuery = `
  CREATE TABLE ${CLIENT_TYPE}(
    id INT,
    name VARCHAR(50),
    PRIMARY KEY(id)
  );
  CREATE TABLE ${CLIENT}(
    id INT AUTO_INCREMENT,
    name VARCHAR(50),
    clientTypeId INT,
    PRIMARY KEY(id),
    FOREIGN KEY (clientTypeId) REFERENCES ${CLIENT_TYPE}(id)
  );
  CREATE TABLE ${INDIVIDUAL}(
    id INT AUTO_INCREMENT,
    clientId INT,
    name VARCHAR(50),
    PRIMARY KEY(id),
    FOREIGN KEY (clientId) REFERENCES ${CLIENT}(id)
  );
  CREATE TABLE ${ACCOUNT}(
    id INT AUTO_INCREMENT,
    individualId INT,
    name VARCHAR(50),
    individualName VARCHAR(50),
    clientTypeName VARCHAR(50),
    PRIMARY KEY(id),
    FOREIGN KEY (individualId) REFERENCES ${INDIVIDUAL}(id)
  );
` 
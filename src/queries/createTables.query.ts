export const createTablesQuery = `
  CREATE TABLE Client(
    id INT AUTO_INCREMENT,
    name VARCHAR(50),
    clientTypeId INT,
    PRIMARY KEY(id)
  );
  CREATE TABLE ClientType(
    id INT,
    name VARCHAR(50),
    PRIMARY KEY(id)
  );
  CREATE TABLE Individual(
    id INT AUTO_INCREMENT,
    clientId INT,
    name VARCHAR(50),
    PRIMARY KEY(id),
    FOREIGN KEY (clientId) REFERENCES Client(id)
  );
  CREATE TABLE Account(
    id INT AUTO_INCREMENT,
    individualId INT,
    name VARCHAR(50),
    individualName VARCHAR(50),
    clientTypeName VARCHAR(50),
    PRIMARY KEY(id),
    FOREIGN KEY (individualId) REFERENCES Individual(id)
  );
` 
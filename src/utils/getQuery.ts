import { getAccounts } from "./getAccounts";
 
export const getQuery = () => {
  let count = 1;

  return Array(3).fill(null).map((_, i) => i + 1).map((n) => {
    
    const getIndividuals = () => {
      const inividuals: string[] = [];
      for (let i = 1; i <= 50; i++) {
        inividuals.push(`INSERT INTO Individual(id, clientId, name)
         VALUES(${count}, ${n}, 'IndividualName${count}');
         ${getAccounts(count)}`);
        count++;
      }
      return inividuals.join('');
    }

    return `      
      INSERT INTO ClientType(id, name)
      VALUES (${n}, 'ClientTypeName${n}');

      INSERT INTO Client(id, name, clientTypeId)
      VALUES (${n}, 'ClientName${n}', ${n});

      ${getIndividuals()}
      `
  }).join('')
}
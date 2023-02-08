export const getAccounts = (num: number) => {
  let accounts = [];
  for (let a = 1; a <= 3; a++) {
    accounts.push(`INSERT INTO Account(individualId, name)
    VALUES(${num}, 'AccountNameOf${num}Individual');`)
  }
  return accounts.join('');
};
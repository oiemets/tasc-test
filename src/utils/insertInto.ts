export const insertInto = (table: string, values: string) => `INSERT INTO ${table} VALUES ${values};`;
import { insertInto } from "./insertInto";
import { joinStrings } from "./joinStrings";

export function joinValues<T>(
  table: string,
  arr: Array<T>,
  fn: (item: T) => string,
  wrapper: (t: string, v: string) => string = insertInto
) {
  return wrapper(table, joinStrings(arr, fn))
} 
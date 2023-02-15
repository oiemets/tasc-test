export function joinStrings<T>(arr: Array<T>, fn: (item: T) => string): string {
  return arr.map(fn).join(',')
} 
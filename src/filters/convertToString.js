export function convertToString(array) {
  return array.filter(item => !!item).join(", ");
}

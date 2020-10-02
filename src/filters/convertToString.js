export function convertToString(array) {
  if(!array) return "";
  return array.filter(item => !!item).join(", ");
}

export const API = 'http://localhost:8080/documento-fiscal';

export function getDateToday() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

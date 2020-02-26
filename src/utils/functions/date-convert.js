export function convertDate(date) {
  let sdate = date.split('-');
  return sdate[2] + '/' + sdate[1] + '/' + sdate[0];
}

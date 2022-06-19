export function isDateInArray(array, date) {
  return !!array.find((item) => item.getTime() == date.getTime());
}

export function formatTime(time) {
  if (time < 10) return `0${time}`;
  else return `${time}`;
}

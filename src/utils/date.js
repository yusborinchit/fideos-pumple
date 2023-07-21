export function isTheSameDay(date1, date2) {
  const isTheSameDate = date1.getDate() === date2.getDate();
  const isTheSameMonth = date1.getDate() === date2.getDate();
  const isTheSameYear = date1.getDate() === date2.getDate();

  return isTheSameDate && isTheSameMonth && isTheSameYear;
}

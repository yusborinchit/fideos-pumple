export function isTheSameDay(date1, date2) {
  const isTheSameDate = date1.getDate() === date2.getDate();
  const isTheSameMonth = date1.getDate() === date2.getDate();
  const isTheSameYear = date1.getDate() === date2.getDate();

  return isTheSameDate && isTheSameMonth && isTheSameYear;
}

export function formattedUnit(unit) {
  return unit < 10 ? `0${unit}` : `${unit}`;
}

export const intlDateFormat = new Intl.DateTimeFormat("es-UR");

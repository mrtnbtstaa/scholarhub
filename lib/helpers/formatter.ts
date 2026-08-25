export const formatDate = (value: Date): string => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(value);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  return `${monthName[month]} ${day}, ${year}`;
};

export const formatTime = (value: string): string | null => {

  if(!value || value == undefined) return null;
  const splittedTime = value.split(":")

  const hour = Number(splittedTime[0]);
  const minute = Number(splittedTime[1]);

  const twelveHourFormat = hour % 12 || 12;
  const period = hour >= 12 ? "PM" : "AM"

  const hourWithZeros = twelveHourFormat < 10 ? `0${twelveHourFormat}` : twelveHourFormat;
  const minuteWithZeros = minute < 10 ? `0${minute}` : minute;

  return `${hourWithZeros}:${minuteWithZeros} ${period}`
};

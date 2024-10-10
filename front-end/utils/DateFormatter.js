export default DateFormatter = (dateString) => {
  // Manually split the dateString into its components
  const regex = /^(\d{4}),(\d{2}) (\d{2}) (\d{2}):(\d{2}) (AM|PM)$/;
  const match = dateString.match(regex);

  if (!match) {
    return "Invalid Date";
  }

  // Extract the date components
  const [_, year, month, day, hours, minutes, period] = match;

  // Convert the extracted values to numbers
  let hour = parseInt(hours, 10);

  // Adjust for 12-hour AM/PM format
  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  // Create a new Date object using the parsed values
  const date = new Date(year, month - 1, day, hour, minutes);

  if (isNaN(date)) {
    return "Invalid Date";
  }

  // Format the time portion (HH:mm AM/PM format)
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedTime = date.toLocaleTimeString([], options);
  return formattedTime;
};

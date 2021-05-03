/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

const timeConversion = (s) => {
  var ampm = s.slice(-2);
  var time = s.split(":");
  if (ampm == "PM" && time[0] != 12) {
    time[0] = parseInt(time[0]) + 12;
  } else if (ampm == "PM" && time[0] == 12) {
    time[0] = 12;
  } else if (ampm == "AM" && time[0] == 12) {
    time[0] = "00";
  }
  time = time.join(":").slice(0, -2);
  return time;
};

console.log(timeConversion("12:25:00AM"));

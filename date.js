var currentDate = new Date();

var monthNames = [
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

var day = currentDate.getDate();
var monthIndex = currentDate.getMonth();
var year = currentDate.getFullYear();

var dayOfWeek = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
});

var dateString =
  dayOfWeek + ", " + day + " " + monthNames[monthIndex] + " " + year;

function displayDate() {
  var dateElement = document.getElementById("current-date");
  dateElement.innerHTML = dateString;
}

window.onload = displayDate;

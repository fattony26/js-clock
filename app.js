let earlyCodeSesh = 7;
let noon = 12;
let lunchTime = 12;
let noonCodeSesh = lunchTime + 2
let partyTime;
let evening = 18;


// Current time on page
let showCurrTime = function() {
  let clock = document.getElementById('clock');

  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  // Set hours
  if (hours >= noon)
  {
    meridian = "PM";
  }

  if (hours > noon)
  {
    hours = hours - 12;
  }

  // Set minutes
  if (minutes < 10)
  {
    minutes = '0' + minutes;
  }

  // Set seconds
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';

  clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures

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
let updateClock = function() {
  let time = new Date().getHours();
  let messageText;
  let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  let timeEventJS = document.getElementById("timeEvent");
  let dogeMoonImgJs = document.getElementById("dogeMoonImg");

  if (time == partyTime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
  } else if ( time == earlyCodeSesh) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Morning Code Sesh Engaged!";
  } else if (lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Lunch Time my guy!";
  } else if (time == noonCodeSesh) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Keep Coding!";
  } else if (time < noon) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  } else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }
  console.log(messageText);
  timeEventJS.innerText = messageText;
  dogeMoonImgJs.src = image;

  showCurrTime();
};
updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button to Work
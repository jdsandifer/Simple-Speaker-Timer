function startTimer() {
   var initialTimeString;
   var minutes;
   var seconds;
   var warningTime;
   var green = "#307c0d";

   changeBackgroundColor(green);

   // Change "Start" button to "Reset"
   document.getElementById("startButton").innerHTML = "Restart";
   document.getElementById("startButton").onclick = 
      function(){
        window.location.reload(false);
      };

   initialTimeString = getTimerElement().innerHTML;
   minutes = extractMinutesNum(initialTimeString);
   seconds = extractSecondsNum(initialTimeString);
        
   warningTime = calculateWarningTime(minutes, seconds);
      
   setTimeout(
      function(){
        countDown(minutes, seconds, warningTime);
      },
      1000);
}
      
function changeBackgroundColor(color) {
   document.body.style.backgroundColor = color;
}

function getTimerElement() {
   return document.getElementById("timeDisplay");
}

function extractMinutesNum(timeString) {
   return 1 * timeString.substring(0,2);
}

function extractSecondsNum(timeString) {
   return 1 * timeString.substring(3,5);
}
      
function calculateWarningTime(minutes, seconds) {
   var totalSeconds = convertTimeToSeconds(minutes, seconds);
   var TWENTY_MIN_IN_SECONDS = 20 * 60;
   var FIVE_MIN_IN_SECONDS = 5 * 60;

   if (totalSeconds >= TWENTY_MIN_IN_SECONDS) {
      return FIVE_MIN_IN_SECONDS;
   } else {
      return Math.round(totalSeconds / 4);
   }
}
      
function convertTimeToSeconds(minutes, seconds) {
   return (minutes * 60) + seconds;
}

function countDown(minutes, seconds, warningTime) {
   var timeString;
   var totalSeconds;        
   var yellow = "#bba900";
   var red = "#d71411";

   minutes = subtractOneMinuteIfTime(minutes, seconds);
   seconds = subtractOneSecond(seconds);

   timeString = timeToString(minutes, seconds);
   updateTimeDisplay(timeString);
        
   totalSeconds = convertTimeToSeconds(minutes, seconds);
   if (totalSeconds > 0) {
      if (totalSeconds === warningTime + 3) {
         changeBackgroundColor(yellow);
      } else if (totalSeconds <= 3) {
         changeBackgroundColor(red);
      }
      setTimeout(
         function(){
            countDown(minutes, seconds, warningTime);
         },
         1000);
   } else {
      updateTimeDisplay("<blink>00:00</blink>");
   }
}

function subtractOneMinuteIfTime(minutes, seconds) {
   return (seconds === 0) ? minutes - 1: minutes;
}

function subtractOneSecond(seconds) {
   return (seconds === 0) ? 59:seconds - 1;
}

/*
 * Expects minutes and seconds to be 1 or 2 digit natural numbers.
 */
function timeToString(minutes, seconds) {
   var minString;
   var secString;
        
   minString = timePartToString(minutes);
   secString = timePartToString(seconds);

   return minString + ':' + secString;
}

/*
 * Expects 1 or 2 digit natural number for timePartNum.
 */
function timePartToString(timePartNum) {
   if (timePartNum <= 9) {
      return '0' + timePartNum;
   } else {
      return timePartNum.toString();
   }
}

function updateTimeDisplay(timeString) {
   getTimerElement().innerHTML = timeString;
}
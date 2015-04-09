//callback is called in the ajax get request when a valid birthday is given. Called from the JSON key complete.
callback = function() {
  if (ifRealBirthday == true) {
    $('#leftover-time').fadeIn(500);
    ifRealBirthday = false;
    setTime();
  }
}

function setTime() {
  $("#years-left").text(yearsLeft);
  $("#months-left").text(monthsLeft);
  $("#days-left").text(daysLeft);
  $("#hours-left").text(hoursLeft);
  $("#minutes-left").text(minutesLeft);
  $("#seconds-left").text(secondsLeft);
}

var myVar = setInterval(function() {
  myTimer()
} , 1000);

function myTimer() {
  if (secondsLeft <= 0) {
      if (minutesLeft <= 0) {
          if (monthsLeft <= 0) {
              if (yearsLeft <= 0) {
                  //Out of time
              }
              else {
                  --yearsLeft;
              }
              monthsLeft = 11;
          }
          else {
              --monthsLeft;
          }
          minutesLeft = 59;
      }
      else {
          --minutesLeft;
      }
      secondsLeft = 59;
  }
  else {
      --secondsLeft;
  }
  setTime();
}
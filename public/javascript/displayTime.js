//callback is called in the ajax get request when a valid birthday is given. Called from the JSON key complete.
callback = function() {
  if (ifRealBirthday == true) {
    $('#leftover-time').fadeIn(1000);
    ifRealBirthday = false;
  }
}
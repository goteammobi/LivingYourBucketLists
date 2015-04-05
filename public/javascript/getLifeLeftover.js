var ifRealBirthday = false;

var months = new Object();
months['1'] = 'January'
months['2'] = 'February';
months['3'] = 'March';
months['4'] = 'April';
months['5'] = 'May';
months['6'] = 'June';
months['7'] = 'July';
months['8'] = 'August';
months['9'] = 'September';
months['10'] = 'October';
months['11'] = 'November';
months['12'] = 'December';

$("#button-life-leftover").click(function(event){
  var birthdate = document.getElementById("input-date");
  birthdate = birthdate.value;
  dateOfBirth = birthdate.split("/");

  var month = dateOfBirth[0];
  var day = dateOfBirth[1];
  var year = dateOfBirth[2];

  var key = 'X-Mashape-Key';
  var value = '93gwp0ihgImshqp2RZbairh6LEv4p1LfKgMjsnwsEAc4u6tbbn'

  //a GET JSON call using the ajax function.
  $.ajax({
    type: 'GET',
    beforeSend: function (request) {
      request.setRequestHeader(key, value);
    },
    url: "https://life-left.p.mashape.com/time-left?birth=" + day + " " + months[month] + " " + year,
    dataType: 'json',
    success: function(json) {
      console.log("Here is the response: " + JSON.stringify(json)); 
      if (json.success == true) {
        ifRealBirthday = true;
        return [true];
      }
      else {
        return [false];
      }
    },
    complete: callback
  });
});

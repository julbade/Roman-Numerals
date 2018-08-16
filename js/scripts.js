// Back End
var convert = function(num) {

  // Arrays with their Matching Values
  var numberValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  // Create the same value of the num to roman numeral
  var numCopy = num;
  var romanValue = '';

  // While the decimal number is greater than 0,
  while (numCopy > 0) {
    // Loop through the indices of the decimalValue array.
    for (var index = 0; index < decimalValue.length; index++) {
      // Get the maximum decimal number less or equal then the decimal number.
      if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        // Add the Roman numeral & decrease numCopy by the decimal equivalent.
        romanValue += romanNumeral[index];
        numCopy -= numberValue[index];
      }
    }
  }

  return romanized;

};

//Front End
$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {
    event.preventDefault();
    var numeral = parseInt($("input#numeral").val());
    var result = $("#numeral").val();
       $("#result").text(convert(result));
       $("#result").show();
     });
   });

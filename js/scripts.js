// Back End
var convert = function(num) {

  // Arrays with their Matching Values
  var numberValue = ['1', '4', '5', '9', '10', '40', '50', '90', '100', '400', '500', '900', '1000'];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
//
  var numberCopy = num;
  var romanChanger = '';
  var index = 0

  // While the decimal number is greater than 0,
  while (numberCopy > 0) {
    // Loop through the indices of the number Value array.
    for (index = 0; index < numberValue.length; index++) {
      // Get the maximum decimal number less or equal then the decimal number.
      if (+numberValue[index] <= numberCopy && +numberValue[+index + 1] > numberCopy) {
        // Add the Roman numeral & decrease numCopy by the number value.
        romanChanger += romanNumeral[index];
        numberCopy -= numberValue[index];
      } else (i !){

      }
    }
  }

  return romanChanger;
};
//Front End
$(document).ready(function() {
  $("form#romanized").submit(function(event) {
    event.preventDefault();
    // var numeral = parseInt($("input#numeral").val());
    var result = $("#enternum").val();
       $("#result").text(convert(result));
       $("#result").show();
     });
   });

// Back End
var convert = function(num) {

  // Arrays with their Matching Values
  var numberValue = [ '1000', '900', '500', '400', '100', '99', '90', '50', '40', '10', '9', '5', '4', '1' ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XCIX', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var romanChanger = '';

    // Loop through the indices of the number Value array.
    for (var index = 0; index < numberValue.length; index++) {
      while (+numberValue[index] <= num) {
        romanChanger += romanNumeral[index];
        num -= numberValue[index];
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

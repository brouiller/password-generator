// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt for password length
//Check to see if it's between 8 and 128
//Confirm lowercase, uppercase, numeric, special characters
//Create array with appropriate characters
//Generate password of appropriate length
//Test password to see if it has at least one of each included character type
//If not, regenerate and test again
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upper = lower.map(value => value.toUpperCase());
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spec = ["!", "@", "#", "$", "%", "^", "&", "*"];

var generatePassword = function () {
  var pwLength = window.prompt("Choose your password length (min 8, max 128).");
  //check pwLength, if it's invalid, let the user know and rerun from the beginning
  if (128 < pwLength || pwLength < 8) {
    window.alert("Please enter a valid number.");
    generatePassword();
  };
  var charArray = [];
  var combineArray = function (w) {
    charArray.push.apply(charArray, w);
    console.log(charArray);
  };

  var charLower = window.confirm(
    "Would you like to include lowercase letters?"
  );
  if (charLower) {
    combineArray(lower);
  };
  var charUpper = window.confirm(
      "Would you like to include UPPERCASE letters?"
    );
  if (charUpper) {
    combineArray(upper);
  };
  var charNum = window.confirm(
      "Would you like to include numbers?"
    );
  if (charNum) {
    combineArray(num);
  };
  var charSpec = window.confirm(
      "Would you like to include special characters?"
    );
  if (charSpec) {
    combineArray(spec);
  };
  if (charArray.length === 0) {
    window.alert("You have to choose at least one type.\nLet's try this again.");
    generatePassword();
  };
  var makePassword = function (z) {
    var pw = "";
    for (var i = 0; i < z; i++) {
      var index = Math.floor(Math.random() * charArray.length);
      pw += charArray[index];
    };
    console.log(pw);
  };
  makePassword(pwLength);

  var checkPassword = function (x,y) {
    if (charLower) {

    } else if (charUpper) {

    } else if (charNum) {

    } else if (charSpec) {

    }
  }
return;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

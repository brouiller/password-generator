// Assignment Code
var generateBtn = document.querySelector("#generate");

//primary function
var generatePassword = function () {

//arrays with different sets of characters
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upper = lower.map((value) => value.toUpperCase());
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var spec = ["!", "@", "#", "$", "%", "^", "&", "*"];

//array to hold user selected characters
  var charArray = [];

//array to record which sets of characters the user selected and how long they want the password to be
  var userSelection = [];

//array with question keywords
  var keyWords = ["lowercase", "UPPERCASE", "numeric", "special"];

//array of character set arrays used to build the user selected array
  var inceptionArray = [lower, upper, num, spec];

//ask user for password length
  var pwLength = window.prompt(
    "Choose your password length. (min 8, max 128, no decimals)"
  );

//check pwLength, if it's invalid, let the user know and return to the beginning
  if (pwLength === null) {
    //alert user if prompt is cancelled
    window.alert(
      "You cancelled the prompt. Press Generate Password to retry."
    );
    return "Press Generate Password to continue.";
  } else if (128 < pwLength || pwLength < 8 || pwLength % 1 != 0) {
    window.alert("Can't you read?\nPlease enter a valid number.");
    generatePassword();
  } else {

//if user input from the prompt passes validation, save value to keyWords array
    userSelection[4] = pwLength;

//for loop to ask which types to include and records selection
    for (var i = 0; i < userSelection.length - 1; i++) {
      var ask = window.confirm(
        "Would you like to include " + keyWords[i] + " characters?"
      );
      if (ask) {
        charArray.push.apply(charArray, inceptionArray[i]);
        userSelection[i] = true;
      };
    };

//checks to make sure user selected at least one character type, otherwise starts it over
    if (charArray.length === 0) {
      window.alert(
        "I can't generate a password from nothing. You have to choose at least one type.\nLet's try this again."
      );
      generatePassword();
    };

//assembles the password by picking random elements from the character array until password length is achieved
    var makePassword = function (z) {
      var pw = "";
      for (var i = 0; i < z; i++) {
        var index = Math.floor(Math.random() * charArray.length);
        pw += charArray[index];
      };

//use regex to test password, regenerate password if it fails
      var regexLow = /([a-z])/;
      var regexUpp = /([A-Z])/;
      var regexNum = /([0-9])/;
      var regexSpe = /([!@#$%^&*])/;

      if (userSelection[0]) {
        lowMatch = regexLow.test(pw);
      } else {
        lowMatch = true;
      };
      if (userSelection[1]) {
        uppMatch = regexUpp.test(pw);
      } else {
        uppMatch = true;
      };
      if (userSelection[2]) {
        numMatch = regexNum.test(pw);
      } else {
        numMatch = true;
      };
      if (userSelection[3]) {
        speMatch = regexSpe.test(pw);
      } else {
        speMatch = true;
      };
      if (lowMatch && uppMatch && numMatch && speMatch) {
        return pw;
      } else {
        return false;
      };
    };
  };

//loop to run makePassword until it's valid
  do {
    var validPassword = makePassword(userSelection[4]);
    if (validPassword) {
      return validPassword;
    };
  } while (!validPassword);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

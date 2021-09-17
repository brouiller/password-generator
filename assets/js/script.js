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

//array to record which sets of characters the user selected
  var userSelection = [false, false, false, false];

//array with question keywords
  var keyWords = ["lowercase", "UPPERCASE", "numeric", "special"];

//array of character set arrays to use in the function to build the user selected array
  var inceptionArray = [lower, upper, num, spec];

//ask user for password length
  var pwLength = window.prompt("Choose your password length. (min 8, max 128, no decimals)");

//check pwLength, if it's invalid, let the user know and return to the beginning
  if (pwLength === null) {
    return "You cancelled the prompt. Press Generate Password to retry.";
  } else if (128 < pwLength || pwLength < 8 || pwLength % 1 != 0) {
    window.alert("Can't you read?\nPlease enter a valid number.");
    generatePassword();
  };

//for loop to ask which types to include and record selection
  for (var i = 0; i < keyWords.length; i++) {
    var ask = window.confirm("Would you like to include " + keyWords[i] + " characters?");
    if(ask){
      charArray.push.apply(charArray, inceptionArray[i]);
      userSelection[i] = true;
    };
  };

//checks to make sure user selected at least one type, otherwise starts it over
  if (charArray.length === 0) {
    window.alert(
      "You can't generate a password from nothing. You have to choose at least one type.\nLet's try this again."
    );
    generatePassword();
  };

//assembles the password by picking random elements from the character array until password length is achieved
  var pw = "";
  var makePassword = function (z) {
    for (var i = 0; i < z; i++) {
      var index = Math.floor(Math.random() * charArray.length);
      pw += charArray[index];
    }
    console.log(pw);
  };

  //generates a password from the character array of the user specified length
  makePassword(pwLength);

  // checks to make sure there's at least one character of each selected type in the password, otherwise makes new password
  var checkPassword = function (x, y) {
    if (charLower) {
      console.log("lower is true");
    } else if (charUpper) {
      console.log("upper is true");
    } else if (charNum) {
      console.log("num is true");
    } else if (charSpec) {
      console.log("spec is true");
    }
  };
  checkPassword(pw, lower);
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

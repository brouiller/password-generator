// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt for password length
//Check to see if it's between 8 and 128
//Confirm lowercase, uppercase, numeric, special characters
//Create array with appropriate characters
//Generate password of appropriate length
//Test password to see if it has at least one of each included character type
//If not, regenerate and test again

//   }
var generatePassword = function () {
  var pwLength = window.prompt("Choose your password length (min 8, max 128).");
  //check pwLength, if it's invalid, let the user know and rerun from the beginning
  if (128 < pwLength || pwLength < 8) {
    window.alert("Please enter a valid number.");
    generatePassword();
  }
  var charArray = [];
  var charLower = window.confirm(
    "Would you like to include lowercase letters?"
  );
  if (charLower) {
    var charArray = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    console.log(charArray);
  };
    var charUpper = window.confirm(
      "Would you like to include UPPERCASE letters?"
    );
  if (charUpper) {
    charArray.push(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    );
    console.log(charArray);
  };
    var charNum = window.confirm(
      "Would you like to include numbers?"
    );
  if (charNum) {
    charArray.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    console.log(charArray);
  };
    var charSpec = window.confirm(
      "Would you like to include special characters?"
    );
  if (charSpec) {
    charArray.push("!", "@", "#", "$", "%", "^", "&", "*");
    console.log(charArray);
  };
  if (charArray.length === 0) {
    window.alert("You have to choose at least one type. \nLet's try this again.");
    generatePassword();
  };

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

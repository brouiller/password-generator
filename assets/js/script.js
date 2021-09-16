// Assignment Code
var generateBtn = document.querySelector("#generate");

// var characters = {
//   lower: true,
//   upper: true,
//   number: true,
//   spechar: true,
// };
//   if (characters.lower) {
//     var charArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//   }
function generatePassword() {
  var characters.lower = window.confirm("To include lowercase, click OK.");

  return "something";
}
// switch (true) {
//   case !characters.lower &&
//     !characters.upper &&
//     characters.number &&
//     characters.spechar:
//     break;
//   case !characters.lower &&
//     !characters.upper &&
//     characters.number &&
//     !characters.spechar:
//     break;
//   case !characters.lower &&
//     !characters.upper &&
//     !characters.number &&
//     characters.spechar:
//     break;
//   case !characters.lower &&
//     !characters.upper &&
//     !characters.number &&
//     !characters.spechar:
//     break;
//   case !characters.lower &&
//     characters.upper &&
//     !characters.number &&
//     characters.spechar:
//     break;
//   case !characters.lower &&
//     characters.upper &&
//     !characters.number &&
//     !characters.spechar:
//     break;
//   case !characters.lower &&
//     characters.upper &&
//     characters.number &&
//     characters.spechar:
//     break;
//   case !characters.lower &&
//     characters.upper &&
//     characters.number &&
//     !characters.spechar:
//     break;
//   case characters.lower &&
//     !characters.upper &&
//     characters.number &&
//     characters.spechar:
//     break;
//   case characters.lower &&
//     !characters.upper &&
//     characters.number &&
//     !characters.spechar:
//     break;
//   case characters.lower &&
//     !characters.upper &&
//     !characters.number &&
//     characters.spechar:
//     break;
//   case characters.lower &&
//     !characters.upper &&
//     !characters.number &&
//     !characters.spechar:
//     break;
//   case characters.lower &&
//     characters.upper &&
//     !characters.number &&
//     characters.spechar:
//     break;
//   case characters.lower &&
//     characters.upper &&
//     !characters.number &&
//     !characters.spechar:
//     break;
//   case characters.lower &&
//     characters.upper &&
//     characters.number &&
//     characters.spechar:
//     break;
//   case characters.lower &&
//     characters.upper &&
//     characters.number &&
//     !characters.spechar:
//     break;
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
// Array of uppercase characters to be included in password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Array of lowercase characters to be included in password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Array of numeric characters to be included in password
var hasNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var gatherContent = []

function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"))
  
  if(Number.isNaN(passwordLength)){
    alert('You have to type a number');
    return null;
  }
  
  if (passwordLength < 8 || passwordLength > 128) {
  alert("Password needs to be atleast 8 characters long and under 128 characters")
  return null;
}

var confirmUpperCase = confirm("Do you wanter upper case characters?")
var confirmLowerCase = confirm("Do you want lower caser characters?")
var confirmSpecial = confirm("Do you want special characters?")
var confirmNumeric = confirm("Do you want numeric values?")

    if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumeric === false) {
        alert("Password not meet criteria")
        return null;
      }
      
      if (confirmUpperCase) {
        gatherContent = gatherContent.concat(upperCase)
      }
      if (confirmLowerCase) {
        gatherContent = gatherContent.concat(lowerCase)
      }
      if (confirmSpecial) {
        gatherContent = gatherContent.concat(specialCharacter)
      }
      if (confirmNumeric) {
        gatherContent = gatherContent.concat(hasNumeric)
      }

    var results = [];
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * gatherContent.length);
        results.push(gatherContent[randomIndex]);
    }
    return results.join("")
}
// End of generatePassword Function


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

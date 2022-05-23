// Array of special characters to be included in password
var specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
// Array of uppercase characters to be included in password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Array of lowercase characters to be included in password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Array of numeric characters to be included in password
var hasNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
// Array of confirmed information
var gatherCharacters = []

// Start of generatePassword Function
function generatePassword() {
    var characterLength = parseInt(prompt("How many charaters do you want your password to be?"))
    if (characterLength < 8 || characterLength > 128) {
        alert("password must be atleast 8 characters in length and under 128 charters total")
        return null;
    }

    // Start of Confirm Statements
    var confirmedSpecialCharacter = confirm("Please confirm you want special charaters");
    var confirmedUpperCaseCharacter = confirm("Please confirm you want upper case letters");
    var confirmedLowerCaseCharacter = confirm("Please confirm you want lower case letters");
    var confirmedNumbericCharacters = confirm("Please confirm you want numeric characters");
    // End of Confirm Statements

    if (confirmedUpperCase === false || confirmedLowerCase === false || confirmedNumeric === false || confirmedSpecialCharacter) {
        alert("Password does not meet authentication requirements");
    return null;
}
if (specialCharater) {
    gatherCharacters = gatherCharacters.concat(confirmedSpecialCharacter)
}
if (upperCaseCharacter) {
    gatherCharacters = gatherCharacters.concat(confirmedUpperCase)
}
if (lowerCaseCharacter) {
    gatherCharacters = gatherCharacters.concat(confirmedLowerCase)
}
if (numericCharacter) {
    gatherCharacters = gatherCharacters.concat(confirmedNumeric)
}
var characterResults = [];
for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * gatherCharacters.length) // 0 - 10
    characterResults.push(gatherCharacters[randomIndex]) // gatherCharacters = ["0", "1", "A", "B"] // ["B", "0"]
}
return characterResults();
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

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var includeUppercase = document.querySelector("#uppercase").checked;
  var includeLowercase = document.querySelector("#lowercase").checked;
  var includeNumeric = document.querySelector("#numeric").checked;
  var includeSpecialCharacters = document.querySelector("#special-characters").checked;
  var passwordLength = document.querySelector("#password-length").value;
  var generatedPassword = "";

  var alphaCharacters = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numericCharacters = '0123456789';
  var specialCharacters = ' !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  var characterOptions = "";

  characterOptions += includeUppercase ? alphaCharacters.toUpperCase() : "";
  characterOptions += includeLowercase ? alphaCharacters : "";
  characterOptions += includeNumeric ? numericCharacters : "";
  characterOptions += includeSpecialCharacters ? specialCharacters : "";

  while (generatedPassword.length < passwordLength) {
    generatedPassword += characterOptions.charAt(Math.floor(Math.random() * generatedPassword.length));

  }
  return generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

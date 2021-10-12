// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var includeUppercase = document.querySelector("#uppercase").checked;
  var includeLowercase = document.querySelector("#lowercase").checked;
  var includeNumeric = document.querySelector("#numeric").checked;
  var includeUppercase = document.querySelector("#uppercase").checked;
  var includeSpecialCharacters = document.querySelector("#special-characters").checked;
  var passwordLength= document.querySelector("#password-length").value;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

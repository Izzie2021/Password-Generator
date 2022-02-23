// Assignment code here
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
  
    while (generatedPassword.length < passwordLength) {
  
      lowercaseCharacter = Math.ceil(alphaCharacters.length * Math.random() * Math.random());
      uppercaseCharacter = Math.ceil(alphaCharacters.length * Math.random() * Math.random());
      numericCharacter = Math.ceil(numericCharacters.length * Math.random() * Math.random());
      specialCharacter = Math.ceil(specialCharacters.length * Math.random() * Math.random());
      generatedPassword += includeUppercase && (generatedPassword.length < passwordLength) ? alphaCharacters.charAt(uppercaseCharacter).toUpperCase() : "";
      generatedPassword += includeLowercase && (generatedPassword.length < passwordLength) ? alphaCharacters.charAt(lowercaseCharacter) : "";
      generatedPassword += includeNumeric && (generatedPassword.length < passwordLength) ? numericCharacters.charAt(numericCharacter) : "";
      generatedPassword += includeSpecialCharacters && (generatedPassword.length < passwordLength) ? specialCharacters.charAt(specialCharacter) : "";
      
    }
  
    generatedPassword = generatedPassword.split('').sort(function () { return 0.5 - Math.random() }).join('');
  
    return generatedPassword;
  
  }
  
  function validateInput() {
    var includeUppercase = document.querySelector("#uppercase").checked;
    var includeLowercase = document.querySelector("#lowercase").checked;
    var includeNumeric = document.querySelector("#numeric").checked;
    var includeSpecialCharacters = document.querySelector("#special-characters").checked;
    var passwordLength = document.querySelector("#password-length").value;
  
    if(!Number.isFinite(passwordLength)){
      alert("Password length criteria must be a number");
      return false;
    }
  
    if(passwordLength < 8 || passwordLength > 128){
      alert("Password length criteria must be greater than 8 and less than 128");
      return false;
    }
  
    console.log("==> includeUppercase");
  
    
  
  
  
  }
  
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
  
    const isValid = validateInput();
  
    if(isValid){
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
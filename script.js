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

function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
  window.alert("Please follow the steps to generate your new password.");
  var passwordLengthPrompt = 
    window.prompt("Please choose a character length of your password. Must be between 8-128 characters long."
    );
  var lowercasePrompt = 
    window.prompt("Would you like lowercase letters in your password? Click OK for YES or click Cancel for NO"
    );
  var uppercasePrompt = 
    window.prompt("Would you like uppercase letters in your password? Click OK for YES or click Cancel for NO"
    );
  var numbersPrompt = 
    window.prompt("Would you like numbers in your password? Click OK for YES or click Cancel for NO"
    );
  var specialPrompt =
    window.prompt("Would you like special characters in your password? Click OK for YES or click Cancel for NO"
    );
}

// function to set characters
var passwordLengthPrompt = function() {
  var length
}

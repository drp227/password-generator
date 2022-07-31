// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()~";
let passwordArray = [];
let randomPassword = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  window.alert("Please follow the steps to generate your new password.");
  var passwordLengthPrompt = 
    parseInt(window.prompt("Please choose a character length of your password. Must be between 8-128 characters long."
    ));
      if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
        window.alert("You need to choose between 8-128 characters!");
        return generatePassword();
      } else if (!passwordLengthPrompt) {
        window.alert("You need to choose between 8-128 characters!");
        return generatePassword();
      }
  var lowercaseConfirm = 
    window.confirm("Would you like lowercase letters in your password? Click OK for YES or click Cancel for NO"
    );
  var uppercaseConfirm = 
    window.confirm("Would you like uppercase letters in your password? Click OK for YES or click Cancel for NO"
    );
  var numbersConfirm = 
    window.confirm("Would you like numbers in your password? Click OK for YES or click Cancel for NO"
    );
  var specialConfirm =
    window.confirm("Would you like special characters in your password? Click OK for YES or click Cancel for NO"
    );
}









function generatePassword() {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = ",.!@#$%^&*";

  var password = " ";
  
  // Prompt for the password length
  var passwordLength = parseInt(prompt(
    "Choose your password length to be between 8 to 128 characters:"
  ));

  //Create the random password based on the password length
  for (var i = 0; i < passwordLength; i++){
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  }
  

  //Checking if the user inputs the correct password length
  if (!passwordLength >= 8 && !passwordLength <= 128) {
    alert("Please enter a password between 8 to 128 characters.");
  }
  console.log("This is the passwordLength: " + passwordLength);
  
  


  return password;
}

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

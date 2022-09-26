function generatePassword() {

  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ',.!@#$%^&*';

  
  

  //Checking if the user inputs the correct password length
  if (!passwordLength >= 8 || !passwordLength <= 128) {
    alert("Please enter a password between 8 to 128 characters.");
  }

  //Create the random password based on the password length
  for (var i = 0; i<=passwordLength; i++){
    Math.floor(Math.random() * password);
  }


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

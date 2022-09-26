function generatePassword() {

  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ',.!@#$%^&*';

  
  // Prompt for the password length
  var passwordLength = window.prompt(
    "Choose your password length to be between 8 to 128 characters:"
  );

  //Checking if the user inputs the correct password length
  if (!passwordLength >= 8 || !passwordLength <= 128) {
    alert("Please enter a password between 8 to 128 characters.");
  }

    // Prompt for the password length
    var passwordLength = window.prompt(
      "Choose your password length to be between 8 to 128 characters:"
    );

  
//Confirm if user wants to include lowercase letters?
  var confirmedLower = window.confirm(
    "Would you like to include lowercase letters?\nSelect the 'Okay' button if YES"
  );

  //Move on to the next password option if Cancel
  if(confirmedLower != true){
  alert("Okay, moving on to other options");
  }
 
  //Do you want to include uppercase?
  var confirmedUpper = window.confirm(
    "Would you like to include uppercase letters?"
  );

   //Move on to the next password option if Cancel
   if(confirmedUpper!= true){
    alert("Okay, moving on to other options");
    }

  //Do you want to include numeric characters?
  var confirmedNumeric = window.confirm(
    "Would you like to include numeric numbers?"
  );

  if(confirmedNumeric!= true){
    alert("Okay, moving on to other options");
    }

  //Do you want special characters?
  
  var confirmedCharacters = window.confirm(
    "Would you like to include special characters?"
  );

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

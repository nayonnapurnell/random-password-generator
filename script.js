function generatePassword() {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = ",.!@#$%^&*";
  confirmedList ="";

  var password = " ";
  
  // Prompt for the password length
  var passwordLength = parseInt(prompt(
    "Choose your password length to be between 8 to 128 characters:"
  ));

  //Checking if the user inputs the correct password length
  if (!passwordLength >= 8 && !passwordLength <= 128){
    alert("Please enter a password between 8 to 128 characters.");
  }

  // Confirm if the user wants to include lowercaseLetters
  var confirmedLower = window.confirm(
    "Would you like to include lowercase letters?\nSelect the 'Okay' button if YES"
  );

  //Move on to the next password option if Cancel
  if(confirmedLower != true){
    alert("Okay, moving on to other options");
    }
    else{
      confirmedList = lowercaseLetters;
    }
  
  //Do you want to include uppercase?
  var confirmedUpper = window.confirm(
    "Would you like to include uppercase letters?"
  );

   //Move on to the next password option if Cancel
   if(confirmedUpper!= true){
    alert("Okay, moving on to other options");
    }
    else{
      confirmedList = lowercaseLetters + uppercaseLetters;
    }

  //Create the random password based on the password length
  for (var i = 0; i < passwordLength; i++){
      password += confirmedList.charAt(Math.floor(Math.random() * confirmedList.length));
   
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

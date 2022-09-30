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

  //Checking if the user inputs less than 8 as the password length
  if (passwordLength <= 7){
    alert("Try again.  Please enter a length of 8 or higher");
    return;
  }

//Checking if the user inputs more than 128 as the correct password length
  if (passwordLength >= 129){
    alert("Try again.  Please enter a length of 128 or less");
    return;
  }

  // Confirm if the user wants to include lowercaseLetters
  var confirmedLower = window.confirm(
    "Would you like to include lowercase letters?\nSelect the 'Okay' button if YES\nSelect the 'Cancel' button if NO"
  );

  //Move on to the next password option if Cancel
  if(confirmedLower != true){
    alert("You selected 'No' to including Lowercase letters.\n Let's move on to the other options.");
    confirmedList != lowercaseLetters;
    }
    //User selected okay for the lower case letter
    else{
      alert("You selected 'YES' to including Lowercase letters.\n Let's move on to the other options.");
      confirmedList = confirmedList.concat(lowercaseLetters);
    }
  
  //Do you want to include uppercase?
  var confirmedUpper = window.confirm(
    "Would you like to include uppercase letters?\nSelect the 'Okay' button if YES\nSelect the 'Cancel' button if NO"
  );

   //Move on to the next password option if Cancel
   //User selects no for UpperCase Letters
   if(confirmedUpper!= true){
    alert("You selected 'No' to including Uppercase letters.\n Let's move on to the other options.");
    }
    //User selects Okay for Upper and Lowercase letters, Upper gets added to the confirmed list
    else{
      confirmedList = confirmedList.concat(uppercaseLetters);
    }

  //Do you want to include numeric numbers?
  var confirmedNumeric = window.confirm(
    "Would you like to include numeric numbers?\nSelect the 'Okay' button if YES\nSelect the 'Cancel' button if NO"
  );
  
  
  //User selects Yes for Lower case, No for Upper case, No for Numeric number
  if(confirmedNumeric!= true){
    alert("You selected 'No' to including Numeric numbers.\n Let's move on to the other options.");
    }
  else {
    alert("You selected 'Yes' to including Numeric numbers.\n Let's move on to the other options.");
    confirmedList = confirmedList.concat(numericCharacters);
    } 
   

   //Do you want to include Special Characters?
   var confirmedCharacters = window.confirm(
    "Would you like to include special characters?\nSelect the 'Okay' button if YES\nSelect the 'Cancel' button if NO"
  );
   //User selects No for Special Character
  if(confirmedCharacters != true){
    confirmedList = uppercaseLetters + numericCharacters + specialCharacters;
  }
  //User selects Yes for Special Character
  else if(confirmedCharacters == true){
    alert("You selected 'Yes' to including Special characters.\n Let's get your password generated");
    confirmedList = confirmedList.concat(specialCharacters);
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

// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
function generatePassword(){

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  
  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
generateBtn.onclick = function (){
  window.confirm("Would you like to use uppercase characters?");
  window.confirm("Would you like to use lowercase characters?");
  window.confirm("Would you like to use numerical characters?");
  window.confirm("Would you like to use special characters?");
  window.prompt("How long would you like your password to be")
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordChar = ""

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"


function passwordPrompts(){
  let lengthPrompt = window.prompt("How long would you like your password to be?");
  
  passwordLength = parseInt(lengthPrompt);

  if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128){
    alert('Password length must be a number between 8 - 128. Please try again.');
    return false;};

  let lowercasePrompt = window.confirm("Would you like to use lowercase characters?");
  let uppercasePrompt = window.confirm("Would you like to use uppercase characters?");
  let numberPrompt = window.confirm("Would you like to use numerical characters?");
  let specialPrompt = window.confirm("Would you like to use special characters?");

  

  
  if (lowercasePrompt) {
    passwordChar += lowercase;
  } else if (uppercasePrompt) {
    passwordChar += uppercase;
  } else if (numberPrompt) {
    passwordChar += number;
  } else if (specialPrompt) {
    passwordChar += symbol;
  }
};

function generatePassword(){
  
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordPrompts();
  
  
  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




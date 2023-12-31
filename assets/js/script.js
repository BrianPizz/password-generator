// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordChar = ""

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"

var passwordLength;

//User will be prompted to choose password charcters
//If chosen the string of characters will be added to possible password characters 
function passwordPrompts(){
  passwordChar = '';
  let lengthPrompt = window.prompt("How long would you like your password to be?");
  
  passwordLength = parseInt(lengthPrompt);

  if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128){
    alert('Password length must be a number between 8 - 128. Please try again.');
    return false;};

  let lowercasePrompt = window.confirm("Would you like to use lowercase characters?");
  
  if (lowercasePrompt) {
    passwordChar += lowercase;
  };
  let uppercasePrompt = window.confirm("Would you like to use uppercase characters?");

  if (uppercasePrompt) {
    passwordChar += uppercase;
  };
  let numberPrompt = window.confirm("Would you like to use numerical characters?");

  if (numberPrompt) {
    passwordChar += number;
  };
  let specialPrompt = window.confirm("Would you like to use special characters?");

  if (specialPrompt) {
    passwordChar += symbol;
  }
  if(!lowercasePrompt && !uppercasePrompt && !numberPrompt && !specialPrompt){
    alert('Password must include at least one character type. Please try again.')
    return false;
  }
  return true;
};
//password will now be generated by randomly selecting charcaters from the password character variable
function generatePassword(){
  let password = "";
  while(password.length < passwordLength){
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  } 
  
  return password;
};
// Write password to the #password input
function writePassword() {
  var isValid = passwordPrompts();
  if(isValid){var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = "";
  passwordText.value = password;

  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

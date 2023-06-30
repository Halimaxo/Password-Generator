// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var allCharacters = [];

  var passwordLength = prompt("How long would you like your password to be?");

  console.log(passwordLength);

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please use another password!");

    console.log(passwordLength);
  }
  var includeUppercase = confirm("Would you like to add uppercase characters?");
  if (includeUppercase === true) {
    allCharacters = allCharacters.concat(uppercase);
  }
  //concat combines two arrays together
  var includeLowercase = confirm("Would you like to add lowercase characters?");
  if (includeLowercase === true) {
    allCharacters = allCharacters.concat(lowercase);
  }
  var includeNumbers = confirm("Would you like to add numbers?");
  if (includeNumbers === true) {
    allCharacters = allCharacters.concat(numbers);
  }
  var includeSpecialCharacters = confirm(
    "Would you like to include special characters?"
  );
  if (includeSpecialCharacters === true) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

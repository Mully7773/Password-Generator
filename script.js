// // Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

//Need a series of .prompt on click

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

//Need to use .confirm for these

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

//Use a conditional--something like...
// if (password.length > 8 && password.length <= 128)
// we want the user to choose a number between 8 and 128



// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

//add prompt function for userInput for num of char in password
// num should be >=8 and < =128 if/else
//userINput confirmation for numeric, lowercase, uppercase, and special characters separately
//save those confirmations in separate variables
// store all the values in form of arrays
 //var numeric = [0,1....]
 // based on user confirmation pick the correct arrays and concatenate them and store that concatenated array
 //in a new variable
 // loop num times (see second step)
 //generate random num for concat array and grab the item this is based on the num value the user put it
 //push that item in new password array
 //return new password

 //var numOfChar = prompt(How many characters?)
//  if (!(numOfChar >= 8 && numOfChar < 128)) {
   //   return;
//  }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generateBtn = document.querySelector("#generate");

// let finalPass = "";

let lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperLetters = ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9];
let symbolics = [" ", "!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];



let generatePassword = () => {
  let finalArray = [];
  let numOfChar = prompt("Please enter a password length between 8 and 128 characters.");
    if (numOfChar >= 8 && numOfChar <= 128) {
    } else {
      alert("Invalid entry.");
      return;
    }
  let lowerCase = confirm("Do you want lowercase characters?");
   if (lowerCase) {
     finalArray.push(...lowerLetters);
    }
    else {

     }
  let upperCase = confirm("Do you want uppercase characters?");
     if (upperCase) {
       finalArray.push(...upperLetters);
     } else {
  
     }
  let numerals = confirm("Do you want to include numerals in your password?");
     if(numerals) {
       finalArray.push(...numbers);
     } else {
    
     }
  let symbols = confirm("Do you want to include special characters in your password?");
     if(symbols) {
       finalArray.push(...symbolics);
     } else {
    
     }
  for (let i = 0; i < numOfChar; i++) {
    // let randomArray = finalArray[Math.floor(Math.random() * finalArray.length)];
    // console.log(finalArray[randomArray])
    let randomArray = Math.floor(Math.random() * finalArray.length)
    let lastArray = finalArray[randomArray]
    console.log(lastArray);
  }
  return finalArray;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











//The issue with the code below: I only get one random letter from each array.
//Maybe it would be better to make a single array with all of the characters, letters, numbers, etc.
//Is it possible to use a string with all values...?
//Then I could use the .filter with if/else statements if the user selects "cancel".
//At the end, I'll have to somehow randomize the final password.
//Another issue is how to apply the password to the user's desired password length.



// let lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// let randomLowerLetters = Math.floor(Math.random() * lowerLetters.length);
// console.log(lowerLetters[randomLowerLetters]); // provides one random lowercase letter

// let upperLetters = ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let randomUpperLetters = Math.floor(Math.random() * upperLetters.length);
// console.log(upperLetters[randomUpperLetters]); // provides one random lowercase letter





// let numbers = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9];

// let randomNumbers = Math.floor(Math.random() * numbers.length);
// console.log(numbers[randomNumbers]); // provides one random number

// // Note that the array below does not include "]" or "_" or "\"
// let symbols = [" ", "!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]; 

// let randomSymbols = Math.floor(Math.random() * numbers.length);
// console.log(symbols[randomSymbols]); // provides one random symbol

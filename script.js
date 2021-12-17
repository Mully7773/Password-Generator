// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generateBtn = document.querySelector("#generate");

// These are my arrays of items stored in varibles.

let lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperLetters = ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9];
let symbolics = [" ", "!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

// Here is the function I use to add the items of the arrays into a new array. I sort them based on conditional statements.
// I'm a bit familiar with let, const, and arrow functions, which I studied before the bootcamp. I thought I would try to use them this time.

let generatePassword = () => {
  let finalArray = [];
  let numOfChar = parseInt(prompt("Please enter a password length between 8 and 128 characters.")); // Use parseInt to ensure the return of an integer
    if (numOfChar >= 8 && numOfChar <= 128) { console.log("adfa")
    } else {
      alert("Invalid entry.");
      return;
    }
  let lowerCase = confirm("Do you want lowercase characters?");
   if (lowerCase) {
     finalArray.push(...lowerLetters);
    }
  let upperCase = confirm("Do you want uppercase characters?");
     if (upperCase) {
       finalArray.push(...upperLetters);
     }
  let numerals = confirm("Do you want to include numerals in your password?");
     if(numerals) {
       finalArray.push(...numbers);
     } 
  let symbols = confirm("Do you want to include special characters in your password?");
     if(symbols) {
       finalArray.push(...symbolics);
     }

// This "if" statement is used if the user decides to cancel all of the conditionals laid out above.

     if (!lowerCase && !upperCase && !numerals && !symbols) {
       alert("Please specify at least one category.")
       return;
     }

// I made one last empty array to store the last password after finalArray is randomized in the for loop.

let finalPassword = [];
  for (let i = 0; i < numOfChar; i++) {
    let randomArray = Math.floor(Math.random() * finalArray.length)
    finalPassword.push(finalArray[randomArray])
  }
  
  return finalPassword.join(" ");  // At last we return the randomized password. I used .join(" ") to form a string and eliminate commas between array elements.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//using default method
// let initialWord = "123";

// let reversedWord = initialWord.split("").reverse().join("");

// console.log(reversedWord);

// if (initialWord === reversedWord){
// console.log(initialWord +" is a palindrom");
// }
// else{
//     console.log(initialWord + " is not a palindrom")
// }

//using loop
let initialWord = "madam";
let reversedWord = "";

for (let i = initialWord.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + initialWord[i];
}

console.log("Reversed word:", reversedWord);

if (initialWord === reversedWord) {
    console.log(initialWord + ": It is a palindrome");
} else {
    console.log(initialWord + ": It is not a palindrome");
}
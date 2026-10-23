console.log("HI....!");

//variables - var - global scop, let - bloked scop, const - blocked scop
var course = "javascript";
console.log(course);
//redeclare 
var course = "playwright";
console.log(course);
//reassign - course playwright is reassigned to gen-ai
course = "gen-ai";
console.log(course);

let laptop = "hp";
console.log(laptop);
//reassign
laptop = "dell";
console.log(laptop);
laptop = "asus";
console.log(laptop);

const location = "dharmapuri";
console.log(location);

//block level and global level
{
    var fruit = "apple";
}console.log(fruit);

// {
//     let vegetable = "tomato"
//     const location1 = "bengaluru"
// }
// console.log(vegetable); //--> this will through a error vegetable is not defined because let is an block level scope
// console.log(location1); //--> this will through a error vegetable is not defined because const is an block level scope

{
    let vegetable = "tomato"
    console.log(vegetable); 
    const location2 = "chennai"
    console.log(location2);
}

let $vegetable = "carrot"; // special charecters and _ and caps can be used in var names 
console.log($vegetable);
let bank_name = "HDFC";
console.log(bank_name);

//int - int can store up 15 values
let number1 = 124124;
console.log(number1);
let number2 = -2431134;
console.log(typeof number2); // type of is used to print which type of data type is used
let number3 = 2307042.31421;
console.log(number3);
let number4 = -23213.1434;
//bigint - used to store more than 15 values -> use n at last 
let number5 = 24345235225254325435324523n;
console.log(number5);
//string
let location_place = "kashmir";
console.log(location_place);
//advantage for string - if we use back tick `value` we can print in multiple lines
let favorit_location = 
`Manali
is
my favorit place`;
console.log(favorit_location);
//null - if we get the typeof for null it will return object - it is an historical bug in JS on first version
let place = null;
console.log(place);
//undefine - not defining any value
let place_1 ;
console.log(place_1);

bike = "triumph";
console.log(bike);

let fruit_one = "apple"
let fruit_two = "apple"
console.log(fruit_one==fruit_two); //== comparition operator 

//boolean
let age = 18;
 let adult_age = age >=18;
 if (adult_age)
 {
    console.log("your are adult")
 }
 else
 {
    console.log("you are minor")
 }

 //symbol

 let fruit_three = Symbol("orange");
 let fruit_four = Symbol("orange");
 console.log(fruit_three==fruit_four);
 console.log(typeof fruit_four);

 //array - used to store multiple values inside []
 let marks = [90,80,90,90,80];
 console.log(marks);

//objects - used to store a key and value parir
let total_marks = {tamil:90, english:80, maths:90, science:90, social:80};
console.log(total_marks);

//function - function declaration - declaring the conditions or code  and function calling - executing the declard code
//variable will be function for this function data type 

function course_names()// function declaration
{
    console.log("Javascript");
    console.log("Playwright");
}

course_names();//function calling 
course_names();
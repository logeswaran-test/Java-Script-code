//using default method

let numbers = [50, 10, 40, 20, 30];

numbers.sort((a, b) => a - b);
//a-b/a+b => result
//positive = swap
//negative = nochanges


console.log(numbers);

//using loop
let numberss = [1, 5, 2, 8, 4];

for (let i = 0; i < numberss.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numberss[j] > numberss[j + 1]) {
            let temp = numberss[j];
            numberss[j] = numberss[j + 1];
            numberss[j + 1] = temp;
        }
    }
}

console.log(numberss);


//number short
let names = ["Ravi", "Arun", "Kumar"];

names.sort();

console.log(names);

let arr = []
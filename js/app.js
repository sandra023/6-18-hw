//Part 1
//Question 1.
//Concatenation allows us to add strings together
const greeting = "Hello";
const name = "Jon";
console.log(greeting + " " + name);

//Interpolation allow you to inject variables directly into a string
const adj = "awesome";
console.log(`What an ${adj} day!`);

//Question 2
//DRY = don't repeat yourself. This help to eliminate bugs and 
//keeps the code clean and neat
//Functions and loops help keep code clean

//Questions 3
//Before a variable is used it must be declared by assigning its type
//Assigning a value to a variable makes the variable store that value
//Defining a variable is to give it value

//Question 4
//const is used when we never want the value of the variable to change
//let is used for redifining a variable w/in a scope, loops, and 
//maybe as a counter

//Question 5
//A parent directory contains a subdirectory or files

//Question 6
//You can type man then a command and get more info on the command and 
//its options 

//Question 7
//when type file/folder names you can hit tab and it will auto complete 
//the name making you programming go much faster

//Part 2 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

a < b;
c > d;
'Name'==='Name';
a + b == c; //not sure if it would be === since before running the equatio
			//both side are not technically idential 
a * a == d; //not sure if it would be === since before running the equatio
			//both side are not technically idential 
e === 'Kevin';
48 == '48';

//Part 3
//Question 1
//Yes it is an infinate loop. Since there is no way to break out of 
//the loop

//Question 2
//Yes it is an infinate loop since you have const runProgram = true. 
//It's not possible to change the value of a const variable
//so there is no way to break out of the loop because it will always
//be true.

//Question 3
let letters = "A"; //assigns the value of "A" to letters
let i = 0; //assigns the value of 0 to i

while (i < 20) {   //the loop will continue to run while i is less than 20
	letters += "A"; //add "A" to letters every time the loop runs
	i++; // increase i by 1 everytime the loop runs
}

console.log(letters); //runs the loop

//i think it will print "AA" twenty times

//it printed 21 A's

//Part 4
//Question 1
//For loops are you used when you want to iterate a given number of times
//While loops are used when you want to run the same code as long as the 
//condition is true(truthy)
//They can both be used to iterate over and over again

//Question 2
for (i = 0; i <= 100; i++){
	console.log(i);
}

//Question 3
// The control statement cosists of:
//var i = 0 the initialization
// i < 100 the condition
// i++ the final expression which gets evaluated after the final block 
//executes but before the condition is evaluated

//Question 4
for (i = 999; i > 0; i--){
	console.log(i);
}

//Question 5
for (i = 1; i < 10; i++){
	console.log(`The value of i is: ${i} of 10`);
}





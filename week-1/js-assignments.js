// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log
const heightInCm = 154;
const favColor = "red";
var likesPizza = true;
console.log("My height is", heightInCm, "cm", "Favorite color is", favColor, "And I likes Pizza", likesPizza);

//Output: My height is 154 cm Favorite color is red And I likes Pizza true


// Write a function sum that finds the sum of two numbers. Side quest - Try passing in a string instead of a number and see what happens?
function sum(num1, num2) {
    add = num1 + num2;
    console.log("Sum is", add);
}
sum(2, 2);

//Output: Sum is 4

function sum(num1, num2) {
    add = num1 + num2;
    console.log("Sum is", add);
}
sum("2", "2");

//Output: Sum is 22

// Write a function called canVote that returns true or false if the age of a user is > 18
function canVote(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
canVote(17);

//Output: false

// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
function find(num) {
    if (num%2==0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}
find(5);

//Output: The number is odd

// Write a function called sum that finds the sum from 1 to a number
function sumSeries(a)
{
    let result = 0;
    for(let i=1;i<=a;i++){
        result = result + i;
    }
    console.log("Sum of 1 to",a,"is",result);
}
sumSeries(10);

//Output: Sum of 1 to 10 is 55

// Write a function that takes a user as an input and greets them with their name and age
let user ={
    name: "Mallikarjun",
    age: 22
}
console.log("Hi",user.name,"your age is",user.age);

//Output: Hi Mallikarjun your age is 22

// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greets(employee) {
    let title, gender;
    if (employee.gender.toLowerCase() === "male") {
      title = "Mr";
    } else if (employee.gender.toLowerCase() === "female") {
      title = "Mrs";
    } else {
      title = "Others";
    }
    console.log("Hi", title, employee.name, "your age is", employee.age);
  }
const employee = {
    name: "Mallikarjun",
    age: 22,
    gender: "Male",
  };
greets(employee);  

//Output: Hi Mr Mallikarjun your age is 22

// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21) and Also tell the user if they are legal to vote or not
function greets(employee) {
    let title, gender, age, cvote;
    if (employee.gender.toLowerCase() === "male") {
      title = "Mr";
    } else if (employee.gender.toLowerCase() === "female") {
      title = "Mrs";
    } else {
      title = "Others";
    }
    if(employee.age >= 18)
    {
        cvote = "Yes you can voted";
    }
    else{
        cvote = "You can't voted";
    }
    console.log("Hi", title, employee.name, "your age is", employee.age,cvote);
  }
const employee = {
    name: "Mallikarjun",
    age: 22,
    gender: "Male",
  };
greets(employee);  

//Output: Hi Mr Mallikarjun your age is 22 Yes you can voted

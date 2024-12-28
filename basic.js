//  Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

//  Input:
//  The first line of the input is the marks of the five subjects mentioned above, respectively.

//  Output:
// Print the result in 2 decimal places

 function calculate(){
    let Mathematics=80;
     let Biology=70;
     let Chemistry=50;
     let Physics=85;
     let Bangla=75;
     let result=(Mathematics+Biology+Chemistry+Physics+Bangla)/5;

     return result
 }

/////////////////////////////////////////////////////////////////////////////////////

// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.


 function remainder(input){
 let output=input%5;

 return output;
 }

// console.log(remainder(119))

/////////////////////////////////////////////////////////////////////////////////////

// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk

 let burgerPrice=540;

 if(burgerPrice>500){
// console.log("Coke is Free")
 }
 else{
//     console.log("Coke is 30tk")
 }

/////////////////////////////////////////////////////////////////////////////////////

// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

 function bmi(wt, ht){
 let weight=wt;
 let height=ht;
 let bmi=weight/(height**2)

 if(bmi<18.5){
     return "you are underweight."
 }
 else if(bmi>=18.5 && bmi <=24.9){
     return "you are normal."
 }
 else if(bmi>=25 && bmi <=29.9){
     return "you are overweight."
 }
 else{
     return "you are obese."
 }

 }


/////////////////////////////////////////////////////////////////////////////////////

// Ticket fare Calculator
    // - Children (age < 10): free
    // - Students get a 50% discount
    // - Senior citizens (age >= 60) gets a 15% Discount
    // - Otherwise Regular ticket fare 800 tk

 let price =800;

 if(age<10){
//    console.log("free") 
 }
 else if(age>=10 && age<=25){
 price-=800*(50/100)
// console.log(price)
 }
 else if(age>25 && age<60){
 price-=800*(15/100)
// console.log(price)
 }
 else{
//     console.log(price)
 }

/////////////////////////////////////////////////////////////////////////////////////

// you have two numbers in two variables, called: num1, num2

// now declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else. 

// also, write it using ternary operator.

 let num1=100;
 let num2=50;

 let result;

 if(num1>num2){
// console.log(result=num1*num1);
 }
 else{
//     console.log(result=num1+num2);
 }

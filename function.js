// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

 function calc(number){
 if(number%2==0){
     let result= number/2;
     return result;
 }
 else{
     let result=number*2;
    return result;
 }
 }

// console.log(calc(11))

//////////////////////////////////////////////////////////////////////////////

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 
let sum=0;
 function make_avg(arr){
 for(let item of arr){
 sum+=item
 }
 return sum/arr.length;
 }

 let arr=[10,20,50,70,80,40,20,10,5];
// console.log(make_avg(arr));

//////////////////////////////////////////////////////////////////////////////

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

let arr5=[10,50,85,70,90]
function make_avg(arr){
let total=arr.reduce((a,b)=>a+b);
let avg=total/arr5.length;

return avg
}

// console.log(make_avg(arr5))

//////////////////////////////////////////////////////////////////////////////

// Write a function to convert temperature from Celsius to Fahrenheit.

function tempConvert(celsius){
let fahrenheit=((celsius/5)*9)+32;

return fahrenheit
}

// console.log(tempConvert(40))

//////////////////////////////////////////////////////////////////////////////

// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function longWord(){
let sentence="I am learning asbnghewrty Programming to become a programmer";
let words=sentence.split(" ")
let long=sentence[0];

for (let word of words){
    if(word.length>long.length){
        long=word
    }
}
// console.log(long)
}

longWord()

//////////////////////////////////////////////////////////////////////////////
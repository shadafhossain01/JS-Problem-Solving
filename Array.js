// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

 let a=[10,20,5]
 let b=[100,50,500]
 let c=a.concat(b);

// console.log(a)
// console.log(b)
// console.log(c)

///////////////////////////////////////////////////////////////////////

// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

 let a2=[10,50,"shadaf",false]
 let b2=false

 if(Array.isArray(b2)==true){
//     console.log("It's an Array")
 }
 else{
//     console.log("It's not Array")
 }

///////////////////////////////////////////////////////////////////////

// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

 let destination=["dhaka","shylet","Cox's"]
 destination.push("Bhola","india")
 destination.pop()

// console.log(destination)

///////////////////////////////////////////////////////////////////////

// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']

 const colors=['red', 'blue', 'green', 'yellow', 'orange'];
 let output3=[];
 for(let color of colors){
 output3.unshift(color);
 }
// console.log(output);

///////////////////////////////////////////////////////////////////////

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:
// [12, 98, 76, 46]

 const numbers2 = [12, 98, 5, 41, 23, 78, 46];
 let output2=[];
 for(let number of numbers2){
     if(number%2==0){
         output2.push(number);
         }
 }
// console.log(output)

///////////////////////////////////////////////////////////////////////

// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:
// 'TomTimTinTik'

 var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(numbers.join(""))

///////////////////////////////////////////////////////////////////////

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:
// 'person working hard a am I'

 const statement = 'I am a hard working person';
 let output=statement.split(" ").reverse().join(" ");;
// console.log(output);

///////////////////////////////////////////////////////////////////////

// Create an array of 5 elements using the Array Constructor.

let arr=new Array(5,4,"sb",true,100);
// console.log(arr)

///////////////////////////////////////////////////////////////////////

// Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };
// console.log(arrayLike[1])

///////////////////////////////////////////////////////////////////////

// Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function convertArr(...c){
console.log(c)
}

// convertArr(5,"sb",true,"rahim")

///////////////////////////////////////////////////////////////////////

// Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];

const merge=arr1.concat(arr2);
// console.log(merge);

///////////////////////////////////////////////////////////////////////

// Use Array.from to convert a string like "Hello" into an array of characters.
// console.log(Array.from("Hello"))

///////////////////////////////////////////////////////////////////////
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

// let a=[10,20,5]
// let b=[100,50,500]
// let c=a.concat(b);

// console.log(a)
// console.log(b)
// console.log(c)

///////////////////////////////////////////////////////////////////////

// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

// let a=[10,50,"shadaf",false]
// let b=false

// if(Array.isArray(b)==true){
//     console.log("It's an Array")
// }
// else{
//     console.log("It's not Array")
// }

///////////////////////////////////////////////////////////////////////

// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

// let destination=["dhaka","shylet","Cox's"]
// destination.push("Bhola","india")
// destination.pop()

// console.log(destination)

///////////////////////////////////////////////////////////////////////

// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']

// const colors=['red', 'blue', 'green', 'yellow', 'orange'];
// let output=[];
// for(let color of colors){
// output.unshift(color);
// }
// console.log(output);

///////////////////////////////////////////////////////////////////////

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:
// [12, 98, 76, 46]

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let output=[];
// for(let number of numbers){
//     if(number%2==0){
//         output.push(number);
//         }
// }
// console.log(output)

///////////////////////////////////////////////////////////////////////

// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:
// 'TomTimTinTik'

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(numbers.join(""))

///////////////////////////////////////////////////////////////////////

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:
// 'person working hard a am I'

// const statement = 'I am a hard working person';
// let output=statement.split(" ").reverse().join(" ");;
// console.log(output);
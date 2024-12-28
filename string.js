// Check whether a string contains all the vowels a, e, i, o, u
 let str="Shadaf";
 str=str.toLowerCase();
 if(str.includes("a") && str.includes("e") && str.includes("i") && str.includes("o") && str.includes("u")){
//     console.log("string contains all the vowels")
 }
 else{
//     console.log("string doesn't contain all the vowels")
 }

////////////////////////////////////////////////////////////////////////////////

// Count how many times a string has the letter a or A

 let str2="shaDAfaBA";
 let count=0;

 for(let item of str2){
     if(item.includes("a") || item.includes("A") ){
         count++
     }
 }
// console.log(count);

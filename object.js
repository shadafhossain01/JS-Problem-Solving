// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 5000 },
    { model: "PhoneB", brand: "Samsung", price: 4000 },
    { model: "PhoneC", brand: "Oppo", price: 2600 },
    { model: "PhoneD", brand: "Nokia", price: 3500 },
    { model: "PhoneE", brand: "Iphone", price: 10500 },
    { model: "PhoneF", brand: "HTC", price: 4800 },
];

function findAveragePhonePrice(phones){
let sum=0;
for(let phone of phones){
    sum+=phone.price
}
sum=sum/phones.length;
// console.log(sum);

}

findAveragePhonePrice(phones)

///////////////////////////////////////////////////////////////////////


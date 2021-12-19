const myArr = [1, 2, 3]

myArr.forEach(x => {
    console.log(x)
});

// this is the .forEach() written out long hand-- or at least in it's most simple form
function myMethod(myArr) {
    for (let i = 0; i < myArr.length; i++) {
        console.log(myArr[i]);
    }
} 
myMethod(myArr);

// pair coding
const myArray = ['g', 'r', 'i', 'n', 'd']
let myString = '';
let myConnect = (myArray) => {
    for (let i = 0; i < myArray.length; i++) {
        myString = myString + myArray[i];
    
    }
    return myString;
}
console.log(myConnect(myArray));

// a loop that maps -- loop through the array and for every item process a function and spit out a new array

let startArr = [1, 12, 30, 46, 58];

function mapping(anArr) {
    let mappedArr = [];
    let newNum = 0;
    
    for (let i = 0; i < anArr.length; i++) {
       newNum = startArr[i] + 30;
       mappedArr.push(newNum);
    }
    return mappedArr;
    }
console.log(mapping(startArr));

// make an array, take element and add numbers to that array 

// let myMapArray = [1,12,30,46,58];
 

// function mapFunction(myMapArray, someNum){
//     let myNewArray=[];
//     let newNumber = 0;
//   for (let i = 0; i < myMapArray.length; i++){
//       newNumber = myMapArray[i]+ someNum;
//       myNewArray.push(newNumber);
//       //myNewArray= myMapArray[]+ myNewArray[i]
//       myNewArray = [...myNewArray, newNumber] //spread operators
//   }
//   return myNewArray
// }
// console.log(mapFunction(myMapArray, 10));
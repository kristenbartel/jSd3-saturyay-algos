// Given a string and an integer array indices of the same length. The strings will be shuffled such that the character at the i'n n'th position moves to indices[i] in the shuffled string. Return the shuffled string.

//assign string to new array
//sort the two arrays in acending order using a sort method
//return new array concat




let string = 'odce' 
let indices = [1, 2, 0, 3];

function bubbleSort (string, inputArr) {
    let stringArr = string.split(''); //make a string an array
    for (let i = 0; i < inputArr.length; i++){
        for (let j = 0; j < inputArr.length; j++) {
            if (inputArr[j] > inputArr[j+1]) {
                [inputArr[j], inputArr[j+1]] = [inputArr[j+1], inputArr[j]]; //swap for input array
                [stringArr[j], stringArr[j+1]] = [stringArr[j+1], stringArr[j]]; //swap for string array
            }

        }
    }
    return stringArr.join(''); //use quotes to join an array and make a string-- the parameter is a separator
}


console.log(bubbleSort(string, indices));


let string1 = 'odce' 
let indices1 = [1, 2, 0, 3];

const restoreString = (string, indices) => {
    let result = "";

    for (let i = 0; i < indices.length; i++) {
        result += string[indices.indexOf(i)]
    }
    return result;
}
console.log(restoreString(string1, indices1));
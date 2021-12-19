let arr = [3, 1, 4, 2];

function bubbleSort (inputArr){
    for (let i = 0; i < inputArr.length; i++){
        for (let j = 0; j < inputArr.length; j++){
            if (inputArr[j] > inputArr[j+1]){
                [inputArr[j], inputArr[j+1]] = [inputArr[j+1], [inputArr[j]]]
            }
        }
    }
}


console.log(bubbleSort(arr));

// let arr = [3, 1, 4, 2];

// function bubbleSort (inputArr){
//   for (let i = 0; i < inputArr.length; i++){
//       console.log("[20]loop1 run #", i)
//     for (let j = 0; j < inputArr.length; j++){
//           console.log("loop2 run #", j)
//             if (inputArr[j] > inputArr[j+1]){
//                 [inputArr[j], inputArr[j+1]] = [inputArr[j+1], inputArr[j]];
//             }
    
//             console.log(arr, "log of first for [27]");
            
//         }
//     }
//     return arr;
// }


// console.log(bubbleSort(arr));

function bblSort2(newArr) {
    let z = 0;
    console.log("[36]", newArr, z);
    while (z < newArr.length ) {
      for (let k = 0; k < newArr.length; k++) {
        if (newArr[k] > newArr[k + 1]) {
          [newArr[k], newArr[k + 1]] = [newArr[k + 1], newArr[k]];
        }
  
      }
      z++
      console.log("[42]", newArr, z);
      
    }
    console.log("[46] before return",newArr,z)
    return newArr;
  }
  
  //console.log(bubbleSort(arr));
  console.log("final output", bblSort2(arr));

  //bigO notation is the concept of how intensive the program is on the PCU
  //nested for loops are very intensive of a system
  //nested for loops are brut force-- attempt to eliminate what you are trying to check for before
  //the while loop here may be less intensive, but MUST avoid the never ending loop
  //O of n is 
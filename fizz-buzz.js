//fizzbuzz
function fizzBuzz (num)
let n = 1;
while (n <= num) {
        
        if (n % 3 === 0) {
                console.log('fizz');    
        } else if (n % 5 === 0){
                console.log('buzz');     
        } else {
                console.log(n);     
        }
        n++
}
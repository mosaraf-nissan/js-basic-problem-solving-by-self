// Total array's sum:-
    
    function factorial(numbers){
      let sum =0;
      for(let i=0; i<numbers.length; i++){
         let index= numbers[i];
         sum = sum+index;  
      }
      return sum;
    }
    let givenNumber =[3,10,50,200];
    let totalNumber =factorial(givenNumber);
    console.log(totalNumber);

// Factorial number find:-
function totalSumNumber(numbers){
   let sum =0;
   for(let i=0; i<=numbers; i++){
      sum = sum + i;
   }
   return sum;
}
let factor =10;
const totalFactor = totalSumNumber(factor);
console.log(totalFactor);
 

function multiplication(number){
   let multipol =1;
   for(let i=1; i<=number; i++){
      multipol= multipol * i;
   }
   return multipol;
}
let myNumber = 10;
let totalMultiplication = multiplication(myNumber);
console.log(totalMultiplication);
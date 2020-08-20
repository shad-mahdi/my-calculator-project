let numbers = {
  num1: null,
  num2: null
}

let actionType = null;
let result = null;

function assignNumber(numberButton) {
  if(numbers.num1 === null || actionType === null) {
     numbers.num1 = numberButton.value;
  } else {
     numbers.num2 = numberButton.value;
  }

  console.log('number one is ' + numbers.num1);
  console.log('number two is ' + numbers.num2);
  console.log('actionType is ' + actionType);

}
function changeActionType(actionButton) {
   actionType = actionButton.value;
}

function findResult() {
   if (actionType === '/') {
      //devide 
      result = numbers.num1 / numbers.num2;
   } else if(actionType==="*") {
      //multiply
      result = numbers.num1 * numbers.num2;
   }else if (actionType === '+') {
      //add
      result = numbers.num1 + numbers.num2;

   }else if (actionType === '-') {
      //minus
      result = numbers.num1 - numbers.num2;
   }


   console.log('the result is ' + result);
}




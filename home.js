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

  const div2 = document.querySelector('.input-show');
  div2.innerHTML = `${numbers.num1} ${actionType} ${numbers.num2}`

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
      result = parseInt(numbers.num1) + parseInt(numbers.num2);

   }else if (actionType === '-') {
      //minus
      result = numbers.num1 - numbers.num2;
   }else if (actionType === '%') {
      //percent
      result = numbers.num1 % numbers.num2;
   }

   const div = document.querySelector('.output-show')
   div.innerHTML = result;
}

function refreshNumbers() {
    //C key
    document.location.reload(true)
}

/*function changeSign() {
   if (result > 0) {
   //negative
   result = result - (result) * 2;      
   }else if (result < 0) {
   //positive
   result = result + (result) * 2;
   }
}*/





let num1 = 0;

let num2;

let num3 = 0;

let num4;

let condition = false;

let result;






function addition(){

condition = true;

result = num2+= num4;

console.log(result);
}

function subtraction()
{

condition = true;

   result = num2-= num4;
  console.log(result);
}
function multiplications()
{

condition = true;

   result = num2*= num4;
  console.log(result);
}function division()
{

condition = true;

   result = num2 / num4;
  console.log(result);
}
function equalSign() {
 console.log(num4);

}









if (condition === false)
{
function key0()
{
   num1+= '0';

    num2 = parseFloat(num1)
   console.log(num2);
}

function key1()
{
   num1+= '1';

    num2 = parseFloat(num1)
   console.log('hey');
}
function key2()
{
   num1+= '2';

   num2 = parseFloat(num1)
   console.log(num2);
}function key3()
{
   num1+= '3';

   num2 = parseFloat(num1)
   console.log(num2);
}function key4()
{
   num1+= '4';

    num2 = parseFloat(num1)
   console.log(num2);
}function key5()
{
   num1+= '5';

    num2 = parseFloat(num1)
   console.log(num2);
}function key6()
{
   num1+= '6';
   ;
    num2 = parseFloat(num1)
   console.log(num2);
}function key7()
{
   num1+= '7';

    num2 = parseFloat(num1)
   console.log(num2);
}function key8()
{
   num1+= '8';

   num2 = parseFloat(num1)
   console.log(num2);
}function key9()
{
   num1+= '9';

   num2 = parseFloat(num1)
   console.log(num2);
}
function decimal()
{
   num1+= '.';

    num2 = parseFloat(num1)
   console.log(num2);
}
}
else if (condition === true) {
  function key00()
  {
     num3+= '0';

      num4 = parseFloat(num3)
     console.log(num4);
  }
  function key11()
  {
     num3+= '1';

      num4 = parseFloat(num3)
     console.log('hello');
  }
  function key22()
  {
     num3+= '2';

     num4 = parseFloat(num3)
     console.log(num4);
  }function key33()
  {
     num3+= '3';

     num4 = parseFloat(num3)
     console.log(num4);
  }function key44()
  {
     num3+= '4';

      num4 = parseFloat(num3)
     console.log(num4);
  }function key55()
  {
     num3+= '5';

      num4 = parseFloat(num3)
     console.log(num4);
  }function key66()
  {
     num3+= '6';
     ;
      num4 = parseFloat(num3)
     console.log(num4);
  }function key77()
  {
     num3+= '7';

      num4 = parseFloat(num3)
     console.log(num4);
  }function key88()
  {
     num3+= '8';

     num4 = parseFloat(num3)
     console.log(num4);
  }function key99()
  {
     num3+= '9';

     num4 = parseFloat(num3)
     console.log(num4);
  }
  function decimal2()
  {
     num3+= '.';
     num4 = parseFloat(num3)
    console.log(num4);
  }
}


//addition,subtraction,division, multiplications


/*
function addition()
{


condition = true;

 result = num2+= num4;

  console.log(result);
}

function subtraction()
{

condition = true;

   result = num2-= num4;
  console.log(result);
}
function multiplications()
{

condition = true;

   result = num2*= num4;
  console.log(result);
}function division()
{

condition = true;

   result = num2 / num4;
  console.log(result);
}
function equalSign() {
 console.log(num4);

}
*/

let numbers = {
  num1: null,
  num2: null
}

let execType = null;

function assignNumber(event) {
  if(numbers.num1 === null || execType === null) {
    numbers.num1 = event.style.height;
  }

  console.log('our number is ' + numbers.num1);
}

// function declaration
//  function doubleIt(num){
//      return num * 2;
//  }


// function expression
// const doubleIt = function myFun(num){
//     return num*2;
// }

//ES6 function declaration
const doubleIt = num => num*2;

const twoAdd = (x,y) => x*y;

const giveAdd = () => 6*6;

const addSub = (a,b) =>
{
    const sum1 = a+b;
    const sum2 = a-b;
    const result = sum1*sum2;
    return result;
}

 const result = addSub(35,15);
 console.log(result);
// default parameter . Amr back up ache 

function add(num1,num2=0){
   // num2 = num2 || 20;
    return num1+num2;
}

const total = add(17,5);

console.log(total);
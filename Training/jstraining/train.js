const numbers=[45,6,8,3,32];
// An array declared with cannot be re-assigned 
//can be changed but not re-declared,can also be deleted.
let text="";
numbers.forEach(myFunction);

function myFunction(value,index,array){
    text+=value+"  "
}

console.log(text)

const numbers2=numbers.map(myFun);

function myFun(value,index,array){
    return value*2;
}

numbers3=numbers.flatMap((x)=>x*2);

console.log(numbers2)
console.log(numbers3)


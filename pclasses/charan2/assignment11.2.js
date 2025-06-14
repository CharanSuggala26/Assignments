let first = document.querySelector("#first");
let getFactors = document.querySelector(".factors");
let result = document.querySelector(".result");
result.style.fontsize = "100px";
let n;
const cars = [];
function getValues(){
    n=Number(first.value);
}
getFactors.addEventListener("click", () => {
    getValues();
    for (let i = 0; i < n; i++) {
           if(n%i==0){
            let x=0;
            cars[x] += i;
            x=x+1;
           }
    }
    result.textContent = cars;
  });

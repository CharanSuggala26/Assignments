//console.log("India promised the fans that they will win the match...");
/*let weatherRain=true;
let matchWin = new Promise((fullfilled,rejected)=>{
    setTimeout(()=>{
        if(weatherRain==true){
            rejected('Match was abondaned');
        }
        else{
            fullfilled('Won the match');
        }
    },5000);
});
matchWin
.then((WIN) => {
    console.log(WIN); 
  })
  .catch((error) => {
    console.error(error);
  })*/

  function kohli(ms) {
    let runCome=true;
    console.log('Virat promised that he will cross Sachin sir record');
    return new Promise((fullfilled, rejected) => {
      setTimeout(() => {
        if(runCome==true){
            fullfilled('Promise fulfilled after ' + (ms/500)+ '  matches');
        }else{
            rejected('not fullfilled');
        }
      }, ms);
    });
  }
    kohli(5000)
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error); 
    });
  


// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data:",dataId);
//             resolve("Successfully Laoded");
//             getNextData();
//         },5000);
//     });
// }



function asyncFunc1() {
    const getPromise = () => {
        return new Promise((resolve, reject) => {
            console.log("I am a Promise");
            resolve("Success from asyncFunc1");
            // reject("Error.....");
        });
    };
    return getPromise(); // Return the promise
}

function asyncFunc2() {
    const getPromise=()=>{
        return new Promise((resolve, reject)=>{
            console.log("I am a Promise");
            resolve("Success from asyncFunc2");
        });
    };
    return getPromise(); // Return the promise
}

// let promise=asyncFunc1();
// console.log("Fetching data1......");

// promise.then((data)=>{
//     console.log("Promise fulfilled ------>",data);
//     console.log("Fetching data2......");
//     let p2=asyncFunc2();
//     p2.then((data) => {
//         console.log("Promise fulfilled ------>",data);
//     });
// });

console.log("Fetching data1......");

asyncFunc1()
    .then((data) => {
        console.log("Promise fulfilled ------>",data);
        console.log("Fetching data2......");
        return asyncFunc2(); 
    })
    .then((data) => {
        console.log("Promise fulfilled ------>",data);
    })
    .catch((error) => {
        console.log("Promise rejected ------>",error);
    });
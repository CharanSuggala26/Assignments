

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data:",dataId);
//             resolve("Successfully Laoded");
//             getNextData();
//         },5000);
//     });
// }

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
        // resolve("Success");
        reject("Error.....");
        
    });
}

let promise = getPromise();
// promise.then((data)=>{
//     console.log("Promise Fullfilled------>",data);
// });

promise.catch((error)=>{
    console.log("Promise rejected------>",error);
});

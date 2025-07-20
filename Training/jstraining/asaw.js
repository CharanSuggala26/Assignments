//1.async functions alwats returns a promise
//2. await pauses the execution of its surrounding async function until the promise is settled/resolved.

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data:",dataId);
//             resolve("Successfully Laoded");
//             getNextData();
//         },5000);
//     })
// }

// async function getWeatherData(){
//     await api();
//     await api();
//}



function asyncFunc1(dataId) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("data:",dataId);
                resolve("Success from asyncFunc1");
            },2000);
        });
}

// async function getWeatherData(){
//     await asyncFunc1(1);
//     await asyncFunc1(2);
//     await asyncFunc1(3);
//     await asyncFunc1(4);
//     await asyncFunc1(5);
// }

// getWeatherData();



//or

(async function getWeatherData(){
    await asyncFunc1(1);
    await asyncFunc1(2);
    await asyncFunc1(3);
    await asyncFunc1(4);
    await asyncFunc1(5);
})(); // Immediately invoked function
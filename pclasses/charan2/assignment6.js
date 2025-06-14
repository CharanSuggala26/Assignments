
//problem 1
let ar2=[7,9,8,3,4]
let sum=ar2.reduce((accumulator,element)=>accumulator+element)
console.log("Sum of array elements: "+sum)
  



//problem 2
let ar3=[1,2,3,4]
let newArr=ar3.map(element=>{
    if(element==1){
        return element+10
    }
    else if(element==2){
        return element+20
    }
    else if(element==3)
    {
        return element+30
    }
    else{
        return element+40
    }
})
console.log(newArr)


//problem 3
let arr4=[

    { name:"ravi",
     marks :
     {
       maths: 89,
       physics : 70 , 
       chemistry :88
     }
    } ,

    { name:"bhanu",
      marks :
      { 
        maths: 98,
        physics : 50 , 
        chemistry :68
      }
    },
    { 
     name:"kiran", 
     marks :
     {
     maths: 50, 
     physics : 82 , 
     chemistry :94
     }
    },]

let mathsHigh=arr4.reduce((ac,ele)=>{
    if(ac.marks!=undefined){
    if(ac.marks.maths>ele.marks.maths)
    return ac.marks.maths
return ele.marks.maths
    }
    else{
        if(ac>ele.marks.maths)
    return ac
return ele.marks.maths
    }
}
)   
console.log("Maths Highest: "+mathsHigh)

let phyHigh=arr4.reduce((ac,ele)=>{
    if(ac.marks!=undefined){
    if(ac.marks.physics>ele.marks.physics)
    return ac.marks.physics
return ele.marks.physics
    }
    else{
        if(ac>ele.marks.physics)
    return ac
return ele.marks.physics
    }

} )
console.log("Physics Highest: "+phyHigh)


let chemHigh=arr4.reduce((ac,ele)=>{
    if(ac.marks!=undefined){
    if(ac.marks.chemistry>ele.marks.chemistry)
    return ac.marks.chemistry
return ele.marks.chemistry
    }
    else{
        if(ac>ele.marks.chemistry)
    return ac
return ele.marks.chemistry
    }

} )
console.log("Chemistry Highest: "+chemHigh)




// for(let i=0; i<=10; i++){
//     // console.log(i*3)
//     if(i%2==0){
//         console.log(i)
//     }
// }


// const arr1 = [2, 454, 6, 9, 10];

// for(let x of arr1){
//     if(x>6){
//         console.log(x)
//     }
// }


//for in

const obj ={
    firstName:"umesh",
    lastName:"mehat",
    age:23,
    study:"BCA"
}

for(let x in obj){
    console.log("Hello: "+ x+ " " + obj[x] )
    console.log("=======================================")
    console.log(`Hello: ${x} ${obj[x]}`)
}
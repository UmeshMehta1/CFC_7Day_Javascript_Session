//named function

function sum(){
  console.log(8+3)
}

// sum()

//function with paremeter 

function sub(x, y){
     console.log(x-y)
}


// sub(7,2)

// Anonymous Function



let tryFun = function(){
        console.log("hello anonymous function")
}

// tryFun()

//arrow function

const arrFuc = ()=>{
    console.log("this is arrow function")
}

// arrFuc()



// const hello = function(){
//     return 3+4
// }

// let res = hello()

// console.log(res)

const name = (firtName, lastName)=>{
    return firtName+" " +lastName
}

let resName = name("Umesh", "Mehta")
console.log(resName)


// name("Umesh", "Mehta")


const name1 = (firtName, lastName)=>{
    console.log("hello ")
}

name1()


function sum1(x, y){
     console.log(x-y)
}

sum1(1, 4)


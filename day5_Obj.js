let person = {
     firstName:"umesh",
     lastName:"mehta",
     age:23,
     hight:"5.7 foot",

    obj:{
        neakName:"umesh",
        study:"bca",
        sem:"6th sem",
    },
    subject:["operating system", "dot Net", "webtechnology", "computerNetworking"],

    fun: function(){
        // console.log("My name is umesh mehta")
        return "My name is umesh Mehta"
    }
}



//fun access
const res = person.fun()
console.log(res)

//obj access
// console.log(person.firstName)
// console.log(person.obj.sem)

//array access
// console.log(person.subject[0]);
// console.log(person.subject[3]);

// console.log(person.fun())


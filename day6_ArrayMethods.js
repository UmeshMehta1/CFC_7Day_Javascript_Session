const arr1 = [3, 4, 6, 9, 10 , 34, 30]
         // 0    1 2  3   4    5   6
// console.log(arr.length);
// console.log(arr.at(2))


// console.log(arr.join(":"))


arr1.pop()
// console.log(arr1.pop())
console.log(arr1)



const fruits = ["Apple", "banana","papaya", "painapple", "waterMellon"]




fruits.unshift("mango")

console.log(fruits)

fruits.push("mango");

console.log(fruits)

// const removeFruit= fruits.shift()
// // console.log(removeFruit)

// // console.log(fruits)
// console.log(fruits)



const newArr=  [2, 5,7, 2, 5, 6, 0, 2]

// console.log(newArr.slice(2,8))

// console.log(newArr)

// console.log(newArr.splice(2,4,100, 440))

// console.log(newArr)

//HoF
const hofArr = [2, 4, 5, 0, 5, 3]

hofArr.forEach((item)=>{
  console.log(item*3)
})
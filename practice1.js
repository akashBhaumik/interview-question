// foreach method
// let arr = ["akash","rakesh","sura"]
// arr.forEach(function(elem,index){
//     console.log(index);
// })

// map method
let arr = [1,5,8]

const output = arr.map(x => x*x)
const output1 = arr.map(x => x.toString(2))

//console.log(output1)

// filter method
let arr1 = [5,8,9,6]
const output2 = arr1.filter(x => x>5)
//console.log(output2);

// reduce method

let arr2 = [9,8,10,45]
const output3 = arr2.reduce((acc,curr)=>{
   if(acc > curr){
       curr = acc
   }
   return curr
},0)
console.log(output3);
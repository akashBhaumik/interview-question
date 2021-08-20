function fibo(num){
    if(num === 1){
        return 5;
    }else if(num === 2){
        return 5 ;
    }else{
        return fibo(num -1) + fibo(num - 2)
     }
}
function generateFibo(n){
let arr = []
for(let i = 0 ; i < n ; i++){
arr.push(fibo(i+1))
}
console.log(arr)
}

generateFibo(5)


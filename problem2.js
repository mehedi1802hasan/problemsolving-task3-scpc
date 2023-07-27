//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
//Example Input: [2, -5, 10, -3, 7] Example Output: 19
// const arr=[2,-5,10,-3,7]
//  const getPossitive=(arr)=>{
//     return arr.filter(item=>item>0).reduce((a,b)=>a+b)
//  }
//  console.log(getPossitive(arr))

function positiveSum(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>=0)
            sum = sum + arr[i]
        
        
    }
    return sum
}
console.log(positiveSum([2,-5,10,-3,7]))
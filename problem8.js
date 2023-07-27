//Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      console.error("Array must have at least two elements.");
      return undefined;
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      console.error("There is no second smallest element in the array.");
      return undefined;
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const numbers = [5, 2, 8, 1, 3, 9, 2];
  const secondSmallestNumber = findSecondSmallest(numbers);
  console.log("Second Smallest Number:", secondSmallestNumber);
  
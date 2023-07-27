//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

//Example Input: "hello world" Example Output: "dlrow olleh"

let str = 'hello world';

function reverseStr(str) {
    let output = '';
    for (let i = str.length - 1; i >= 0; i--) {
        output = output + str[i];
    }
    return output;
}

console.log(reverseStr(str));


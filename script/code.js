// greeting
function greet(name) {
    console.log("Hello, " + name);
}

greet("Shakeel")

// multiplication of 2 numbers
function multiply(num1, num2) {
    console.log(num1 * num2);
}

multiply(2, 4)

// table of 5
function tableOfFive(parm) {
    let result = null;
    return result = parm * 5;
    console.log(result);       
}

tableOfFive(5)

// the corrected version:
function tableOfFive(parm) {
    let result = parm * 5; 
    console.log(result);  
    return result;         
}

tableOfFive(5); 


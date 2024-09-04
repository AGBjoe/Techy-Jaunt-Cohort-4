const calculate = (a, b, operator) => {

    if (operator === 'add') {
        return a + b;
    } else if (operator === 'subtract') {
        return a - b;
    } else if (operator === 'multiply') {
        return a * b;
    } else if (operator === 'divide') {
        return a / b;
    }

    const validNumbers = (a, b) => {
        if (a === null || a === undefined || b === null || b === undefined) {
            return 'Error : Both values should be valid';
        }   
    } 
   
    const validOperators = ['add', 'subtract', 'multiply', 'divide'];
    if (!validOperators.includes(operator)) {
       return 'Error : Invalid operator';
    }
};

 const result1 = calculate (10, 2, 'add' );
 const result2 = calculate (15, 5, 'subtract' );
 const result3 = calculate (7, 10, 'multiply' );
 const result4 = calculate (10, 5, 'divide' );

 console.log(result1);
 console.log(result2);
 console.log(result3);
 console.log(result4);
 
function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.calculate = function(num1, num2, operator, operatorFunc) {
     num1 = Number(num1);
     num2 = Number(num2);

     if(isNaN(num1) || isNaN(num2)) {
        alert("Podano nieodpowiednie dane! Możesz użyć tylko liczb");
        return;
    }

     

    const result = operatorFunc(num1, num2);
    this.history.push(`${num1} ${operator} ${num2} = ${result}`);
    return result;
}


Calculator.prototype.add = function(num1, num2) {
    return this.calculate(num1, num2, '+', (a,b) => a + b);
}

Calculator.prototype.subtract = function(num1, num2) {
    return this.calculate(num1, num2, '-', (a,b) => a - b);
}


Calculator.prototype.multiply = function(num1, num2) {
    return this.calculate(num1, num2, '*', (a,b) => a * b);
}

Calculator.prototype.divide = function(num1, num2) {
    if(Number(num2) === 0) {
        alert("Nie można dzielić przez 0!");
        return;
    }
    return this.calculate(num1, num2, '/', (a,b) => a / b);
}


Calculator.prototype.power = function(num1, num2) {
    return this.calculate(num1, num2, '^', (a,b) => {
        let result = 1;
        for(let i = 0; i < b; i++) {
            result *= a;
        }
        return result;
    });
}

const calc = new Calculator();
const operations = {
    '+': (a, b) => calc.add(a, b),
    '-': (a, b) => calc.subtract(a, b),
    '*': (a, b) => calc.multiply(a, b),
    '/': (a, b) => calc.divide(a, b),
    '^': (a, b) => calc.power(a, b),
};

let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        operations[action](number1, number2);
    }
    
} while(calc.isCorrectAction(action));
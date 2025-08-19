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

Calculator.prototype.add = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        alert("Podano nieodpowiednie dane! Możesz użyć tylko liczb");
        return;
    }

    const result = num1 + num2;
    this.history.push(`${num1} + ${num2} = ${result}`);
}

Calculator.prototype.subtraction = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        alert("Podano nieodpowiednie dane!");
        return;
    }

    const result = num1 - num2;
    this.history.push(`${num1} - ${num2} = ${result}`);
}

Calculator.prototype.multiplication = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        alert("Podano nieodpowiednie dane! Możesz użyć tylko liczb");
        return;
    }

    const result = num1 * num2;
    this.history.push(`${num1} * ${num2} = ${result}`)
}

Calculator.prototype.division = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        alert("Podano nieodpowiednie dane! Możesz użyć tylko liczb");
        return;
    }

    const result = num1 / num2;
    this.history.push(`${num1} / ${num2} = ${result}`)
}

Calculator.prototype.exponentiation = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        alert("Podano nieodpowiednie dane! Możesz użyć tylko liczb");
        return;
    }

    let result = 1;
    for(let i = 0; i< num2; i++){
        result *= num1;
    }
    this.history.push(`${num1} ^ ${num2} = ${result}`)
}



const calc = new Calculator();
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

        if(action === '+') {
            calc.add(number1, number2);
        } else if(action === '-') {
            calc.subtraction(number1, number2);
        } else if(action === '*') {
            calc.multiplication(number1, number2);
        } else if(action === '/') {
            calc.division(number1, number2);
        } else if(action === '^') {
            calc.exponentiation(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));
import { Calculator } from './Calculator.js';
import { allClearBtn, operationBtns, deleteBtn, equalsBtn, numberBtns, previousOperandTextElement, currentOperandTextElement } from './el_incs.js'


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberBtns.forEach(btn => {
    btn.addEventListener('click', function() {
	    calculator.setDisplayValue(this.innerText);
		calculator.displayOutput();
	});
});

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.displayOutput();
});

allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.setDisplayValue(0);
    calculator.displayOutput();
});

operationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
		calculator.doOperation(this.innerText);
	    calculator.displayOutput();
	});
});

equalsBtn.addEventListener('click', () => {
   calculator.compute();
   calculator.displayOutput();
});

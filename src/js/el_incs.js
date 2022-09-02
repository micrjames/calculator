const allClearBtn = document.querySelector('[data-all-clear]');
const operationBtns = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');   
const numberBtns = document.querySelectorAll('[data-number]');
           
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

export { allClearBtn, operationBtns, deleteBtn, equalsBtn, numberBtns, previousOperandTextElement, currentOperandTextElement };

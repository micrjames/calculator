const Calculator = function(previousOperandTextElement, currentOperandTextElement) {
   let previousOperandTE = previousOperandTextElement;
   let currentOperandTE = currentOperandTextElement;

   let currentOperand = '';
   let previousOperand = '';
   let operation = null;

   this.clear = function() {
	  currentOperand = '';
	  previousOperand = '';
	  operation = null;
   };

   this.delete = function() {
	  currentOperand = currentOperand.toString().slice(0, -1);
   };

   this.setDisplayValue = function(value) {
	  if(value === '.' && currentOperand.includes('.')) return;
	  currentOperand = currentOperand.toString() + value.toString();
   };

   const getDisplayValue = function(value) {
	  const val_str = value.toString();
      const integerDigits = parseFloat(val_str.split('.')[0]);	  
	  let integerDisplay;
	  if(isNaN(integerDigits)) integerDisplay = '';
	  else integerDisplay = integerDigits;
	  const decimalDigits = val_str.split('.')[1];
	  if(decimalDigits != null)
	  	return `${integerDisplay}.${decimalDigits}`;
	  return integerDisplay;
   };

   this.doOperation = function(value) {
	  if(currentOperand === '') return;
	  if(previousOperand !== '') this.compute();

	  operation = value;
	  previousOperand = currentOperand;
	  currentOperand = '';
   };

   this.compute = function() {
	  let computation;
	  const prev = parseFloat(previousOperand);
	  const current = parseFloat(currentOperand);

	  if(isNaN(prev) || isNaN(current)) return;
	  switch(operation) {
		 case '+':
			computation = prev + current;
			break;
		 case '-':
			computation = prev - current;
			break;
		 case '*':
			computation = prev * current;
			break;
		 case '÷':
			computation = prev / current;
			break;
		 default:
			break;
	  }

	  currentOperand = computation;
	  operation = null;
	  previousOperand = '';
   };

   this.displayOutput = function() {
	  currentOperandTE.innerText = getDisplayValue(currentOperand);
	  if(operation !== null) {
		 previousOperandTE.innerText = `${getDisplayValue(previousOperand)} ${operation}`;
	  } else {
		 previousOperandTE.innerText = '';
	  }
   };
}

export { Calculator };

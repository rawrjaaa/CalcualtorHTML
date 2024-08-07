window.onload = function() {
    // Select the calculator display element
    const display = document.querySelector('.display');
  
    // Select all the calculator button elements
    const buttons = document.querySelectorAll('.button button');
  
    // Initialize variables to store the first number, second number, and operator
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';
  
    // Function to handle button click events
    function handleButtonClick(event) {
      const buttonValue = event.target.textContent;
  
      // Check if the button is a number
      if (!isNaN(buttonValue)) {
        // If the operator is not set, add the number to the first number
        if (!operator) {
          firstNumber += buttonValue;
        } else {
          // If the operator is set, add the number to the second number
          secondNumber += buttonValue;
        }
        // Update the display with the current number
        display.textContent = secondNumber ? secondNumber : firstNumber;
      } else {
        // If the button is an operator, perform the calculation if necessary
        if (operator) {
          performCalculation();
        }
        // Set the operator
        operator = buttonValue;
      }
    }
  
    // Function to perform the calculation based on the operator
    function performCalculation() {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case '-':
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case '=':
          // Perform the calculation based on the operator
          switch (operator) {
            case '+':
              result = parseFloat(firstNumber) + parseFloat(secondNumber);
              break;
            case '-':
              result = parseFloat(firstNumber) - parseFloat(secondNumber);
              break;
            case '*':
              result = parseFloat(firstNumber) * parseFloat(secondNumber);
              break;
            case '/':
              result = parseFloat(firstNumber) / parseFloat(secondNumber);
              break;
          }
          // Reset the first number, second number, and operator
          firstNumber = result.toString();
          secondNumber = '';
          operator = '';
          break;
      }
      // Update the display with the result
      display.textContent = result;
    }
  
    // Add event listeners to the calculator buttons
    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
  };
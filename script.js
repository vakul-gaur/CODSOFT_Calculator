const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let currentInput = '';
const updateInputBox = () => {
    inputBox.value = currentInput || '0';
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();

        if (buttonText === 'AC') {
            currentInput = '';
        }

        else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0, -1);
        }
       
        else if (buttonText === '=') {  
                currentInput = eval(currentInput).toString();
        }
       
        else {
            const lastChar = currentInput[currentInput.length - 1];
            const operators = ['+', '-', '*', '/', '%'];
            if (operators.includes(buttonText) && operators.includes(lastChar)) {
                return;
            }

            currentInput += buttonText;
        }

        updateInputBox();
    });
});
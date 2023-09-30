// JavaScript code for the Simple Calculator functionality
function calculateSimple() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
            case '^':
                result=Math.pow(num1,num2);
                break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}
function goBack()
{ // Redirect to the specified HTML URL
        window.location.href = 'index.html';

}


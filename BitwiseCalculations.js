function performBitwise() {
    const num1 = parseInt(document.getElementById('bit1').value);
    const num2 = parseInt(document.getElementById('bit2').value);
    const operation = document.getElementById('bit-operation').value;

    let result;

    switch (operation) {
        case 'AND':
            result = num1 & num2;
            break;
        case 'OR':
            result = num1 | num2;
            break;
        case 'XOR':
            result = num1 ^ num2;
            break;
        default:
            result = 'Invalid operation';
            break;
    }

    document.getElementById('bit-result').textContent = `Result: ${result}`;
}
function goBack()
{
    window.location.href='index.html';
}
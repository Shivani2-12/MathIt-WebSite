function calculate()
{
    const num=parseFloat(document.getElementById('number').value);
    const operation=document.getElementById('sci-operation').value;
    let result;
    switch(operation)
    {
        case 'sin':
            result=Math.sin(num);
            break;
        case 'cos':
            result=Math.cos(num);
            break;
         case 'tan':
                result = Math.tan(num);
                break;
        case 'asin':
                result = Math.asin(num);
                break;
        case 'acos':
                result = Math.acos(num);
                break;
        case 'atan':
                result = Math.atan(num);
                break;
        case 'log':
            result =Math.log(num);
            break;
        case 'sqrt':
            result = Math.sqrt(num);
            break;
        case 'factorial':
                result=fact(num);
           break;
        default:
                result='Invalid function selected';
    }
    document.getElementById('sci-result').textContent=  `Result: ${result}`;

}
function goBack()
{ // Redirect to the specified HTML URL
    window.location.href = 'index.html';
}
function fact(num)
{
    var i, f;
    f=1
    
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    return f;
}
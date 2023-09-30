function showContent(contentId) {
    const contentContainer = document.getElementById('contentContainer');
    const selectedContent = document.getElementById(contentId);

    contentContainer.innerHTML=selectedContent.innerHTML;

}

function convertLength()
{
    const number=parseFloat(document.getElementById('fromLength').value);
    const conversionFactorsOfLength = {
        'cm': 0.01,
        'm': 1,
        'km': 1000,
        'mm': 0.001,
        'in': 0.0254,
        'ft': 0.3048,
        'yd': 0.9144,
        'mi': 1609.34,
        'nmi': 1852,
        'micron': 1e-6,
    };
    const fromUnit=document.getElementById('fromLengthUnit').value;
    const toUnit=document.getElementById('toLengthUnit').value;
    const convertedValue=number*conversionFactorsOfLength[fromUnit]/conversionFactorsOfLength[toUnit];
    document.getElementById('length-result').innerText=`Result: ${convertedValue}`;
}
function convertArea()
{
    const number=parseFloat(document.getElementById('fromArea').value);
    const fromUnit=document.getElementById('fromAreaUnit').value;
    const toUnit=document.getElementById('toAreaUnit').value;
    const conversionFactorsOfArea = {
        'sqm': 1,
        'sqft': 0.092903,
        'acre': 4046.86,
        'hectare': 10000,
        'sqkm': 1000000,
        'sqmi': 2589988.11,
        // Add more conversion factors as needed
    };
    const convertedValue=number*conversionFactorsOfArea[fromUnit]/conversionFactorsOfArea[toUnit];
    document.getElementById('area-result').innerText=`Result: ${convertedValue}`;

}
function convertTime()
{
    const number=parseFloat(document.getElementById('fromTime').value);
    const fromUnit=document.getElementById('fromTimeUnit').value;
    const toUnit=document.getElementById('toTimeUnit').value;
    const conversionFactorsOfTime = {
        'sec': 1,
        'min': 60,
        'hr': 3600,
        'day': 86400,
        'wk': 604800,
        'month': 2628000,
        'yr': 31536000,
        // Add more conversion factors as needed
    };
    const convertedValue=number*conversionFactorsOfTime[fromUnit]/conversionFactorsOfTime[toUnit];
    document.getElementById('time-result').innerText=`Result: ${convertedValue}`;
}
function goBack()
{ // Redirect to the specified HTML URL
    window.location.href = 'index.html';
}

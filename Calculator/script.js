let displayValue = '';

function appendValue(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}

function calculatePercentage() {
    try {
        const result = eval(displayValue + '/100');
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}
// get input element function
function getINPUTElementById(id) {
    const elementField = document.getElementById(id);
    const elementString = elementField.value;
    const element = parseInt(elementString);
    if (!isNaN(element)) {
        elementField.value = '';
    }
    return isNaN(element) ? 0 : element;
}

// get Html element function
function getHTMLElementById(id) {
    const elementField = document.getElementById(id);
    const elementString = elementField.innerText;
    const element = parseInt(elementString);
    return isNaN(element) ? 0 : element;
}

// value assign function
function assignValue(id, amount) {
    const elementField = document.getElementById(id);
    elementField.innerText = amount;
}

// calculate expense
document.getElementById('calculate').addEventListener('click', function () {
    // get the input elements
    const income = getINPUTElementById('income');
    const food = getINPUTElementById('food');
    const rent = getINPUTElementById('rent');
    const clothes = getINPUTElementById('clothes');
    
    // calculate total expense
    const totalExpense = food + rent + clothes;
    // calculate balance
    const balance = income - totalExpense;

    // value assign function call for total expense and balance
    assignValue('total-expanse', totalExpense);
    assignValue('balance', balance);
})

// calculate saving
document.getElementById('btn-save').addEventListener('click', function () {
    const save = getINPUTElementById('save');
    const savePercentage = save * 100;
    assignValue('savings', savePercentage);
    const previousBalance = getHTMLElementById('balance');
    const remBalance = previousBalance - savePercentage;
    assignValue('rem-balance', remBalance);
});

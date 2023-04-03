// Selecting elements
const inputBill = getElement('.input-bill');
const btnContainer = getElement('.btn-tip-container');
const inputPeople = getElement('.input-number-people');
const customTip = getElement('#custom-tip');
const resetBtn = getElement('#reset-btn');
const tipAmount = getElement('span:first-child');
const total = getElement('span:last-child');

// Adding event listeners
inputBill.addEventListener('input', getBillNumber);
btnContainer.addEventListener('click', getTipNumber);
inputPeople.addEventListener('input', getNumberOfPeople);
resetBtn.addEventListener('click', reset);

// Creating variables
let inputBillValue, tipNumber, numberOfpeople;

// Customising clicked buttons
const buttonItems = Array.from(btnContainer.children);
buttonItems.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.classList.contains('filtered')) {
            event.target.classList.toggle('tip-selected');
        } 
    });
}); 

// Selecting element from the DOM function
function getElement(identifier) {
    const el = document.querySelector(identifier);
    if (!el) {
        throw new Error('Could not find the element specified')
    } else {
        return el;
    }
}

// Grabbing bill value function
function getBillNumber(e) {
    inputBillValue = Number(e.target.value);
    console.log(inputBillValue);
    return inputBillValue;
}

// Grabbing tip value function
function getTipNumber(e) {
    let tipPercentage = e.target.value;
    if (tipPercentage != 0) {
        tipNumber = Number(tipPercentage.substring(0, tipPercentage.length - 1));       
        console.log(tipNumber);
        return tipNumber;
    } else {
        // console.log('User selected custom tip');
        customTip.addEventListener('input', (e) => {
            tipNumber = Number(e.target.value);           
            return tipNumber;
        });       
    }
}

// Grabbing number of people function
function getNumberOfPeople(e) {
    numberOfpeople = Number(e.target.value);
    // console.log(numberOfpeople);
    tipCalculation();
    return numberOfpeople;
}

function tipCalculation() {
    tipTotal = inputBillValue * ((tipNumber / 100).toFixed(2)) / numberOfpeople;
    // console.log(tipTotal);
}

function reset() {
 console.log('reset')
}



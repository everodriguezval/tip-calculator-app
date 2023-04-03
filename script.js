// Selecting elements
const inputBill = getElement('.input-bill');
const btnContainer = getElement('.btn-tip-container');
const inputPeople = getElement('.input-number-people');
const customTip = getElement('#custom-tip');
const resetBtn = getElement('#reset-btn');
const tipAmount = getElement('.tip-to-pay span');
const totalToPay = getElement('.total-to-pay span');

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
    button.addEventListener('click', btnClicked);
}); 

function btnClicked(e) {
    if (e.target.classList.contains('filtered')) {
        e.target.classList.toggle('tip-selected');
    }
}

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
    totalPerPerson = inputBillValue / numberOfpeople + tipTotal;
    displayTipAmount(tipTotal);
    displayTotal(totalPerPerson);
}

function displayTipAmount(tiptotalPara) {
    tipAmount.innerHTML = tiptotalPara;
}

function displayTotal(totalPerPersonPara) {
    totalToPay.innerHTML = totalPerPersonPara;
}

function reset() {
    inputBill.value = "";
    inputBillValue = 0;
    tipNumber = 0;
    customTip.innerHTML = "";
    inputPeople.value = "";
    numberOfpeople = 0;
    tipAmount.innerHTML = 0.00;
    totalToPay.innerHTML = 0.00;
    buttonItems.forEach(button => {
        if (button.classList.contains('tip-selected')) {
            button.classList.remove('tip-selected')
        }
    });    
};

const inputBill = getElement('.input-bill');
const btnContainer = getElement('.btn-tip-container');
const numberOfPeople = getElement('.input-number-people');
const customTip = getElement('#custom-tip');
const resetBtn = getElement('#reset-btn');
const tipAmount = getElement('span:first-child');
const total = getElement('span:last-child');


inputBill.addEventListener('input', (e) => {
    let inputBillValue = Number(e.target.value);
});

btnContainer.addEventListener('click', getTipValue);

numberOfPeople.addEventListener('input', (e) => {
    console.log(e.target.value);
});

resetBtn.addEventListener('click', (e) => {
    console.log(e.target.value);
});


function getElement(identifier) {
    const el = document.querySelector(identifier);
    if (!el) {
        throw new Error('Could not find the element specified')
    } else {
        return el;
    }
}

function getTipValue(e) {
    let tipPercentage = e.target.value;

    if (tipPercentage != 0) {
        console.log('A number but with a $!')
        let tipNumber = Number(tipPercentage.substring(0, tipPercentage.length - 1));       
        return tipNumber;
    } else {
        console.log('User selected custom tip');
        customTip.addEventListener('input', (e) => {
            let customTipNumber = Number(e.target.value);           
            return customTipNumber;
        });       
    }
}
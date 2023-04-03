const inputBill = getElement('.input-bill');
const btnContainer = getElement('.btn-tip-container');
const numberOfPeople = getElement('.input-number-people');
const customTip = getElement('#custom-tip');
const resetBtn = getElement('#reset-btn');

// console.log(inputBill);
// console.log(btnContainer);
// console.log(numberOfPeople);
// console.log(customTip);
// console.log(resetBtn);


function getElement(identifier) {
    const el = document.querySelector(identifier);
    if (!el) {
        throw new Error('Could not find the element specified')
    } else {
        return el;
    }
}
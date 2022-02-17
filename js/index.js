// all input field & btns here  

//NORMAL PART
//income
const monthlyIncome = document.getElementById('income');
//expense
const foodExpense = document.getElementById('foodexp');
const rentExpense = document.getElementById('rentexp');
const clothExpense = document.getElementById('clothexp');

//calclate btn
const calculateBtn = document.getElementById('calculate-btn');

//final calculations
const totalExpense = document.getElementById('total-exp');
const totalBalance = document.getElementById('total-balance');



//SAVINGS PART

//monthly savings input
const monthlySavings = document.getElementById('savings');
//savings btn
const calclateSavingsBtn = document.getElementById('calculate-savings-btn');
//show savings amnt & reamining blnc
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-total');



//ERROR MESSAGE NORMAL
const NumberError = document.getElementById('pos-num');
const bdgtOverflowError = document.getElementById('bdgt-overflow');

//ERROR MESSAGE SAVING
const saveNumberError = document.getElementById('pos-num-save');
const savebdgtOverflowError = document.getElementById('bdgt-overflow-save');









//functions herer
function textToNumber(params, isValue) {
    let value = 0;
    if (isValue == 1) value = parseFloat(params.value);
    else value = parseFloat(params.innerText);

    if (!isNaN(value) && value >= 0) {
        NumberError.classList.add('d-none');
        return value;
    }

    else {
        NumberError.classList.remove('d-none');
        return NaN;
    }

}

calculateBtn.addEventListener('click', () => {
    let overAllExpense = textToNumber(foodExpense, 1) + textToNumber(rentExpense, 1) + textToNumber(clothExpense, 1);
    let finalTotalBalance = textToNumber(monthlyIncome, 1) - overAllExpense;

    if(textToNumber(remainingBalance,2) > 0){
        finalTotalBalance = textToNumber(remainingBalance,2)-overAllExpense;
    }

    if (isNaN(overAllExpense) || isNaN(finalTotalBalance)) {
        NumberError.classList.remove('d-none'); 
    }
    else if (finalTotalBalance < 0) {
        bdgtOverflowError.classList.remove('d-none'); 
    }
    else {
        totalExpense.innerText = overAllExpense;
        totalBalance.innerText = finalTotalBalance;
        // err msg toggel 
        bdgtOverflowError.classList.add('d-none'); NumberError.classList.add('d-none');
    }


    


})

calclateSavingsBtn.addEventListener('click', () => {
    let totalSavingAmount = (textToNumber(monthlyIncome, 1) / 100) * textToNumber(monthlySavings, 1);
    let RBalance = textToNumber(monthlyIncome, 1);
    if (textToNumber(totalBalance, 2) != 0) {
        RBalance = textToNumber(totalBalance, 2);
    }

    let lastRemainingBalance = RBalance - totalSavingAmount;



    if (isNaN(totalSavingAmount) || isNaN(lastRemainingBalance)) {
        saveNumberError.classList.remove('d-none');
    }
    else if (totalSavingAmount > RBalance) {
        savebdgtOverflowError.classList.remove('d-none');
    }
    else {
        savingAmount.innerText = totalSavingAmount;
        remainingBalance.innerText = lastRemainingBalance;
        saveNumberError.classList.add('d-none'); savebdgtOverflowError.classList.add('d-none');
    }


})
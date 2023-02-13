// step-1 add event listener in btn 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-2 get input value 
    const depositAmount = getInputValueById('deposit-field');
    if(isNaN(depositAmount)){
        alert('please enter a valid amount')
        return;
    }
    // step-3 get previous deposit amount 
    const previousDepositTotal = getInnerTextById('deposit-element');

    // step-4 calcute new deposit total and update
    const calculateDepositTotal = previousDepositTotal + depositAmount;
    // step-4.5
    setInnerTextById('deposit-element', calculateDepositTotal);

    // step-5 get previous balance
    const previousBalance = getInnerTextById('balance');

    // step-6 calculate new balance total and update
    const calculateNewBalance = previousBalance + depositAmount;
    // step-6.5
    setInnerTextById('balance', calculateNewBalance);

})
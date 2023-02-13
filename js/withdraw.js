document.getElementById('withdarw-btn').addEventListener('click', function(){
    const withdarwAmount = getInputValueById('withdraw-field');
    if(isNaN(withdarwAmount)){
        alert('please enter a valid amount')
        return;
    }
    const previousWithdrawTotal = getInnerTextById('withdarw-element');
    const previousBalance = getInnerTextById('balance');
    if(withdarwAmount > previousBalance){
        alert('baap er Bank e eto taka nai')
        return;
       }
    const calculateNewWithdrawTotal = previousWithdrawTotal + withdarwAmount;
    setInnerTextById('withdarw-element', calculateNewWithdrawTotal);

    const calculateNewBalance = previousBalance - withdarwAmount;
    setInnerTextById('balance', calculateNewBalance);
})
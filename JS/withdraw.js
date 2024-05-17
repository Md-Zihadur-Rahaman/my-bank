document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdrawAmountValueString =withdrawAmount.value;
    const withdrawAmountNo = parseFloat(withdrawAmountValueString);
    console.log(withdrawAmountNo)

    withdrawAmount.value = '';


    const totalWithdrawAmount = document.getElementById('withdraw-total');
    const totalWithdrawAmountString = totalWithdrawAmount.innerText;  
    console.log(totalWithdrawAmountString)  
    const totalWithdrawAmountNo = parseFloat(totalWithdrawAmountString)

    const totalWithdrawAmountSum = withdrawAmountNo + totalWithdrawAmountNo;

   
    totalWithdrawAmount.innerText = totalWithdrawAmountSum;

    const totalBalanceAmount = document.getElementById('balance-total');
    const totalBalanceAmountString = totalBalanceAmount.innerText;
    const totalBalance = parseFloat(totalBalanceAmountString);

    const totalBalanceSum = totalBalance - totalWithdrawAmountSum;

    totalBalanceAmount.innerText = totalBalanceSum;



})
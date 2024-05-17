document.getElementById('deposit-btn').addEventListener( 'click',function(){
    const depositAmount = document.getElementById('deposit-field');
    const depositAmountValueString = depositAmount.value;
    const depositAmountNo = parseFloat(depositAmountValueString);
    console.log(depositAmountNo)


    const totalDepositAmount = document.getElementById('deposit-total');
    const totalDepositAmountString = totalDepositAmount.innerText;  
    console.log(totalDepositAmountString)  
    const totalDepositAmountNo = parseFloat(totalDepositAmountString)

    const totalDepositAmountSum = depositAmountNo + totalDepositAmountNo;

    totalDepositAmount.innerText =  totalDepositAmountSum;


   

    const totalBalanceAmount = document.getElementById('balance-total');
    const totalBalanceAmountString = totalBalanceAmount.innerText;
    const totalBalance = parseFloat(totalBalanceAmountString);

    const totalBalanceSum = totalBalance + totalDepositAmountSum;

    totalBalanceAmount.innerText = totalBalanceSum;

    depositAmount.value = '';

})
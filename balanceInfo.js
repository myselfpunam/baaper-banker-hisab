document.getElementById('btn-deposite').addEventListener('click', function(){
  const depositeField = document.getElementById('deposite-input')
  const newDeposite = depositeField.value
  const newdepositeFloat = parseFloat(newDeposite)
  depositeField.value = ''
  if(isNaN(newDeposite)){
    alert('Please provide  valid number')
    return
  }

  const depositeTotal =document.getElementById('deposite-total')
  const previousDeposite = depositeTotal.innerText;
  const previousDepositeFloat = parseFloat(previousDeposite)
  const deposite = newdepositeFloat + previousDepositeFloat
  depositeTotal.innerText = deposite

  const balanceField = document.getElementById('balance-total')
  const previousBalance = balanceField.innerText
  const previousBalanceFloat = parseFloat(previousBalance)
  const depositeTotalBalance = previousBalanceFloat + newdepositeFloat
  balanceField.innerText = depositeTotalBalance

})




document.getElementById('btn-withdraw').addEventListener('click', function(){
  const withdrawField = document.getElementById('withdraw-input')
  const newWithdraw = withdrawField.value
  const newWithdrawFloat = parseFloat(newWithdraw)
  
  withdrawField.value = ''

  if(isNaN(newWithdraw)){
    alert('Please provide  valid number')
    return
  }

  const withdrawTotal =document.getElementById('withdraw-total')
  const previousWithdraw = withdrawTotal.innerText;
  const previousWithdrawFloat = parseFloat(previousWithdraw)
  
 

  const balanceField = document.getElementById('balance-total')
  const previousBalance = balanceField.innerText
  const previousBalanceFloat = parseFloat(previousBalance)

  if( newWithdraw > previousBalanceFloat){
    alert('Taka ki gache dhore?')
    return
  }
  const withdraw = newWithdrawFloat + previousWithdrawFloat
  withdrawTotal.innerText = withdraw
  const withdrawTotalBalance = previousBalanceFloat - newWithdrawFloat
  balanceField.innerText = withdrawTotalBalance
})
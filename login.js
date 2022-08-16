//step-1 : Get button 
document.getElementById('btn-login').addEventListener('click', function(){
  //step-2: get email value from an input field
  const emailField =  document.getElementById('email-check')
  const email = emailField.value
   //step-3: get password value from an input field
  const passwordField = document.getElementById('password-check')
  const password= passwordField.value
  //step-4 : checking whether it is valid input or not
  if(email === 'punam@gmail.com' && password === 'bhuiyan'){
    window.location.href = 'index.html'
  }
  else{
    alert('Dakati korte aschos! Mair Chinos HALA')
  }
})
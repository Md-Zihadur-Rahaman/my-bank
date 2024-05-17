

document.getElementById('btn-user').addEventListener('click', function(){
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
   
    if (email === 'my@email.com' && password === 'abcd') {window.location.href = 'bank.html'}
    else {console.log('in valid user')}
})
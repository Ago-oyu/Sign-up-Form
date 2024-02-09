const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const legend = document.getElementById('legend');
const message = document.getElementById('error-msg')

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        message.innerText = '*Password do not match'
    } else{
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        message.innerText = ''
    }
})

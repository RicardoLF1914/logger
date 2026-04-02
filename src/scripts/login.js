const username = document.querySelector('#username-login');
const password = document.querySelector('#password-login');
const button = document.querySelector('#button-login');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue === '' || passwordValue === '') {
        alert('Preencha todos os campos')
        return;
    };

    if (usernameValue !== sessionStorage.getItem('username') ||
        passwordValue !== sessionStorage.getItem('password')
    ) {
        alert('Nome de usuário e/ou senha incorretos')
        return;
    }

    window.location.href = './home.html'
})
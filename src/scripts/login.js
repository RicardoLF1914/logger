const username = document.querySelector('#username-login');
const password = document.querySelector('#password-login');
const button = document.querySelector('#button-login');
const checkbox = document.querySelector('#checkbox-login')

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

checkbox.addEventListener('change', () => {
    const type = password.getAttribute('type');

    if (type === 'password') {
        password.setAttribute('type', 'text');
        return;
    }

    password.setAttribute('type', 'password');
})
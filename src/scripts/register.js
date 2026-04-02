const name = document.querySelector('#name-register');
const username = document.querySelector('#username-register');
const password = document.querySelector('#password-register');
const button = document.querySelector('#button-register');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const nameValue = name.value;
    const usernameValue = username.value;
    const passwordValue = password.value;

    if (
        nameValue === '' ||
        usernameValue === '' ||
        passwordValue === ''
    ) {
        alert('Preencha todos os campos')
        return;
    };

    sessionStorage.setItem('name', nameValue);
    sessionStorage.setItem('username', usernameValue);
    sessionStorage.setItem('password', passwordValue);

    alert('Cadastro realizado com sucesso.');

    window.location.href = './login.html'
})
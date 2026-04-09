const username = document.querySelector('#username-recovery')
const new_password = document.querySelector('#new-password-recovery')
const confirm = document.querySelector('#confirm-new-password-recovery')
const button = document.querySelector('#button-recovery')
const checkbox = document.querySelector('#checkbox-recovery')

button.addEventListener('click', (event) => {
    event.preventDefault();

    const username_value = username.value;
    const new_password_value = new_password.value;
    const confirm_value = confirm.value;

    if (
        username_value === '' ||
        new_password_value === '' ||
        confirm_value === ''
    ) {
        alert('Preencha todos os campos')
        return;
    }

    if (username_value !== sessionStorage.getItem('username')) {
        alert('Usuário não encontrado')
        return;
    }

    if (new_password_value === sessionStorage.getItem('password')) {
        alert('Senha já utilizada')
        return;
    }

    if (new_password_value !== confirm_value) {
        alert('Senhas não coincidem')
        return;
    }

    sessionStorage.setItem('password', new_password_value);

    alert('Senha redefinida com sucesso.')

    window.location.href = './login.html'
})

checkbox.addEventListener('change', () => {
    const type_password = new_password.getAttribute('type');
    const type_confirm = confirm.getAttribute('type');

    if (type_password && type_confirm === 'password') {
        new_password.setAttribute('type', 'text');
        confirm.setAttribute('type', 'text');
        return;
    }

    new_password.setAttribute('type', 'password');
    confirm.setAttribute('type', 'password');
})
const title = document.querySelector('h1')

title.innerText = `Olá, ${sessionStorage.getItem('name')}`
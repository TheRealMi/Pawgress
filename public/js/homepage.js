const loginButton = document.getElementById('login');
const createAccountButton = document.getElementById('create');

loginButton.addEventListener('click', () => {
    window.location.href = '/login';
});

createAccountButton.addEventListener('click', () => {
    window.location.href = '/createaccount';
});
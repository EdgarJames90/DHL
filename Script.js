function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}

function showRegister() {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function register() {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('new-email').value.trim();
    const password = document.getElementById('new-password').value.trim();

    if (fullName === "" || email === "" || password === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    localStorage.setItem('registeredName', fullName);
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    showLogin();
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');
    const registeredName = localStorage.getItem('registeredName');

    if (username === registeredEmail && password === registeredPassword) {
        sessionStorage.setItem('sessionActive', 'true');
        sessionStorage.setItem('sessionUser', registeredName);
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('main-container').classList.remove('hidden');
        document.getElementById('user-name').textContent = `Bienvenido, ${registeredName}`;
    } else {
        alert("Credenciales incorrectas.");
    }
}

function logout() {
    sessionStorage.clear();
    location.reload();
}

function toggleDarkMode() {
    document.getElementById('body').classList.toggle('dark-mode');
}

window.onload = () => {
    if (sessionStorage.getItem('sessionActive')) {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('main-container').classList.remove('hidden');
        document.getElementById('user-name').textContent = `Bienvenido, ${sessionStorage.getItem('sessionUser')}`;
    }
};

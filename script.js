// Находим элементы формы:
localStorage.clear
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');
const errorMessage = document.getElementById('errorMessage');

function setDefaultUser() {
    const defaultUsername = 'SultonEshankulov';
    const defaultPassword = 'milanaloveyou';
    
    if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
        localStorage.setItem('username', defaultUsername);
        localStorage.setItem('password', defaultPassword);
        console.log('Логин и пароль установлены по умолчанию');
    }
}

function storageInfo(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    return username === storedUsername && password === storedPassword;
}

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (storageInfo(username, password)) {
        alert('Вы успешно вошли!');
        window.location.href = 'user-page.html';
    } else {
        errorMessage.textContent = 'Логин или пароль неправильный!';
        errorMessage.style.display = 'block';
    }
});

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁';
    } else {
        passwordInput.type = 'text';
        togglePassword.textContent = '👁‍🗨';
    }
});

function check() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    submitButton.disabled = !(usernameValue && passwordValue);
}

setDefaultUser();

usernameInput.addEventListener('input', check);
passwordInput.addEventListener('input', check);
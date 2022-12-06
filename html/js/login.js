const switchers = document.querySelectorAll('.switcher')
const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const urlAuth = 'https://localhost:7171/api/Auth'
let currentUser = 'user';
let user = [];

switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    });
});

function logIn() {
    let userName = loginForm.querySelector('#loginUsername').value;
    let password = loginForm.querySelector('#loginPassword').value;

    fetch(`${urlAuth}?username=${userName}&password=${password}`)
        .then(response => response.json())
        .then(data => {
            if(data.error){
                alert(data.error)
            }
            else if (data.id) {
                user = data;
                sessionStorage.setItem(currentUser, JSON.stringify(data));
                window.location = 'home.html';
            }
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });

}

function registration() {
    let email = registerForm.querySelector('#signupEmail').value;
    let password = registerForm.querySelector('#signupPassword').value;
    let userName = registerForm.querySelector('#signupUsername').value;

    fetch(urlAuth, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "userName": userName,
            "password": password,
            "email": email
        })
    })
        .then(response => {
            if (response.ok) {
                alert('User created');
                window.location = 'login.html';
            }
            return response;
        })
        .then(data => data)
        .catch(error => {
            console.log(error);
            alert(error);
        })
}
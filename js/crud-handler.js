const logOutBtn = document.querySelector('.logout');
const addBtn = document.querySelector('#button-add');
const userTag = document.querySelector('.user');

window.onload = () => {
    setUser();
    addBtn.addEventListener('click', () => {
        addToDo();
    });
    logOutBtn.addEventListener('click', () => {
        logOut();
    })
}

let setUser = function () {
    user = JSON.parse(sessionStorage.getItem(currentUser));
    if (!user) {
        window.location = 'login.html';
        alert('You are not logged in!');
    } else if (user) {
        console.log("all good " + user.userName, user.email)
        userTag.innerText = `User:    ${user.userName} 
         Email:    ${user.email}`;
        getUserCards(user.id)
            .then(tasks => {
                for (let i in tasks) {
                    printCard(tasks[i]);
                }
            });
    }
}

function addToDo() {
        addCard().then(task => {
            printCard(task);
            location.reload();
        });
}

function printCard(task) {
    let clonedCard = document.querySelector('.card').cloneNode(true);
    clonedCard.querySelector('.type').value = task.type;
    clonedCard.querySelector('.content').textContent = task.content;
    clonedCard.querySelector('.date').value = task.endDate;
    clonedCard.querySelector('#card-id').value = task.id;
    document.querySelector('.cards__row').append(clonedCard);
}


function edit(button) {
    let card = button.parentNode.parentNode.parentNode;
    let type = card.querySelector('.type');
    let content = card.querySelector('.content');
    let date = card.querySelector('.date');
    let dateEdit = card.querySelector('.date-input')

    date.style.display = 'none';
    dateEdit.style.display = 'block';

    type.readOnly = false;
    content.readOnly = false;
}

function discard(button) {
    let card = button.parentNode.parentNode.parentNode;
    let type = card.querySelector('.type');
    let content = card.querySelector('.content');
    let date = card.querySelector('.date');
    let dateEdit = card.querySelector('.date-input');

    date.style.display = 'block';
    dateEdit.style.display = 'none';

    type.readOnly = true;
    content.readOnly = true;
    location.reload();
}

function update(button) {
    let card = button.parentNode.parentNode.parentNode;

    let type = card.querySelector('.type');
    let content = card.querySelector('.content');
    let date = card.querySelector('.date');
    let dateEdit = card.querySelector('.date-input')

    date.style.display = 'block';
    dateEdit.style.display = 'none';

    putCard(card);
    type.readOnly = true;
    content.readOnly = true;
}

let logOut = function () {
    sessionStorage.clear();
    window.location = 'login.html';
}

function addCard() {
    let type = document.querySelector('#todo-form__input').value;
    let content = document.querySelector('#todo-form__content').value;
    let date = document.querySelector('#todo-form__date').value;

    return fetch('https://localhost:7171/api/ToDo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "type": type,
            "content": content,
            "endDate": date,
            "userId": user.id
        })
    })
        .then(response => {
            if (response.ok) {
                alert("Successfully created a new ToDo item")
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.log(error);
            alert(error);
        });
}
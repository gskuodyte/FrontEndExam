function putCard(card) {
    let id = card.querySelector('#card-id').value;
    let type = card.querySelector('.type').value;
    let date = card.querySelector('.date-input').value;
    let content = card.querySelector('.content').value;
    let notEditedDate = card.querySelector('.date').value;
    
    if (date === "") {
        date = notEditedDate
    }

    fetch(`https://localhost:7171/api/ToDo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": user.id,
            "type": type,
            "content": content,
            "endDate": date,
            "id": id
        })
    })
        .then(data => {
            if (data.ok) {
                alert('Task updated successfully!');
            }
        })
        .catch(error => {
            console.log(error);
            alert(Error)
        });
}
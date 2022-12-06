function removeCard(button) {
    let card = button.parentNode.parentNode.parentNode;

    let id = card.querySelector('#card-id').value;

    fetch(`https://localhost:7171/api/ToDo/${id}`, {
        method: 'DELETE',
    })
        .then(response => response)
        .then(data => {
            if (data.ok) {
                card.remove();
                alert("Card deleted successfully!");
            }
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });
}



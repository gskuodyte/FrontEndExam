function getUserCards(userId) {
    if (userId) {
        return fetch("https://localhost:7171/api/ToDo")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                user.tasks = [];
                for (let i in data) {
                    if (data[i].userId === user.id) {
                        user.tasks.push(data[i]);
                    }
                }
                return user.tasks;
            })
            .catch(error => {
                alert(error);
                console.log(error);
            });
    }
}
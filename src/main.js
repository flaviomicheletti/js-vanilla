
// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        // console.log(todos);
        todos.forEach(function (item, indice) {
            console.log(item, indice);
        });
    })
    .catch(error => {
        console.warn('Failed!', error);
    });

// API
// teste no terminal
// curl -X GET -i https://jsonplaceholder.typicode.com/todos
//
// https://jsonplaceholder.typicode.com/

// const bar = require("./foo.js");
// bar();

const { handler1, handler2, handler3 } = require("./handlers.js");


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        // console.log(todos);
        todos.forEach(function (item, indice) {
            // console.log(item.title);
            addItem(container, createElem(item));
        });

        handler1(container);
        // handler2(divMain);
        // handler3(divMain, function (row) {
        //     console.log(row);
        // });

    })
    .catch(error => {
        console.warn('Failed!', error);
    });

let container = document.getElementById('mytable');

function createElem(item) {
    let elem = document.createElement("tr");
    elem.innerHTML = `<th scope="row">${item.id}</th>
        <td>${item.title}</td>`;
    return elem;
}

function addItem(elemParent, elemChild) {
    elemParent.appendChild(elemChild);
}

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
            addItem(divMain, createElem(item.title));
        });

        handler1(divMain);
        // handler2(divMain);
        // handler3(divMain, function (row) {
        //     console.log(row);
        // });

    })
    .catch(error => {
        console.warn('Failed!', error);
    });

let divMain = document.getElementById('main');

function createElem(text) {
    let elem = document.createElement("p");
    let texto = document.createTextNode(text);
    elem.appendChild(texto);
    return elem;
}

function addItem(elemParent, elemChild) {
    elemParent.appendChild(elemChild);
}

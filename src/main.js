// API
// teste no terminal
// curl -X GET -i https://jsonplaceholder.typicode.com/todos
//
// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        // console.log(todos);
        todos.forEach(function (item, indice) {
            //console.log(item, indice);
            addItem(divMain, createElem(item.title)); 
        });
    })
    .catch(error => {
        console.warn('Failed!', error);
    });

let divMain = document.getElementById('main');

function createElem(text) {
    let elem  = document.createElement("p");
    let texto = document.createTextNode(text);
    elem.appendChild(texto);
    return elem;
}

function addItem(elemParent, elemChild) {
    elemParent.appendChild(elemChild);
}

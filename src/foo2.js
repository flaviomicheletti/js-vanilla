// API
// teste no terminal
// curl -X GET -i https://jsonplaceholder.typicode.com/todos
//
// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {

        todos.forEach(function (item, indice) {
            addItem(divMain, createElem(item.title));
        });

        addRowHandlers(divMain);

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

//
// https://stackoverflow.com/questions/1207939/adding-an-onclick-event-to-a-table-row
//
function addRowHandlers(parent) {
    const rows = parent.getElementsByTagName("p");

    // for (let i = 0; i < rows.length; i++) {
    //     // const currentRow = rows[i];
    //     const currentRow = parent.children[i];
    //     currentRow.onclick = function (event) {
    //         console.log(event.target);
    //     };
    // }

    // for (let i = 0; i < rows.length; i++) {
    //     const currentRow = parent.children[i];
    //     currentRow.onclick = function (event) {
    //         let a = Math.random();
    //         console.log(a);
    //     };
    // }

    // for (let i = 0; i < rows.length; i++) {
    //     const currentRow = parent.children[i];

    //     const handler = function (row) {
    //         let a = Math.random();
    //         return function () {
    //             console.log(a);
    //         };
    //     };

    //     currentRow.onclick = handler(currentRow);
    // }

    // for (let i = 0; i < rows.length; i++) {
    //     var currentRow = parent.children[i];
    //     var createClickHandler = function (row) {
    //         return function () {
    //             console.log(row);
    //         };
    //     };
    //     currentRow.onclick = createClickHandler(currentRow);
    // }

}

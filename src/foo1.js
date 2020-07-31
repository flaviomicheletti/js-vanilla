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
            // console.log(item.title);
            addItem(divMain, createElem(item.title));
        });

        //
        // http://www.java2s.com/Tutorials/Javascript/Javascript_Element_How_to/Table_Row/Handle_click_event_for_table_row_tr.htm
        //
        const rows = document.getElementsByTagName("p");
        for (let i = 0; i < rows.length; i++) {
            rows[i].onclick = function () {
                console.log(this.textContent);
            };
        }

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
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

        onRowClick(divMain, function (foo) {
            // var value = row.getElementsByTagName("td")[0].innerHTML;
            // document.getElementById('click-response').innerHTML = value + " clicked!";
            console.log(foo);
        });

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
// https://www.codexpedia.com/javascript/javascript-add-on-click-event-on-table-rows/
//
function onRowClick(parent, callback) {
    const rows = parent.getElementsByTagName("p");

    for (let i = 0; i < rows.length; i++) {
        parent.children[i].onclick = function (row) {
            return function () {
                callback(row);
            };
        }(parent.children[i]);
    }
};


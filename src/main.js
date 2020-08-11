// API
// teste no terminal
// curl -X GET -i https://jsonplaceholder.typicode.com/todos
//
// https://jsonplaceholder.typicode.com/

// const bar = require("./foo.js");
// bar();

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        // console.log(todos);
        todos.forEach(function (item, indice) {
            // console.log(item.title);
            addItem(tbody, createElem(item));
        });

        handler(tbody, function (item) {
            console.log(item.dataset.id);
        });

    })
    .catch(error => {
        console.warn('Failed!', error);
    });

let target = document.getElementById('target');

target.innerHTML = `<table class="table" id="mytable">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
  </tr>
</thead>
<tbody>
</tbody>
</table>`


let table = document.getElementById('mytable');
let tbody = table.children[1];

function createElem(item) {
    let elem = document.createElement("tr");
    elem.innerHTML = `<th scope="row">${item.id}</th>
        <td>${item.title}</td>`;
    elem.setAttributeNode(createAttr("data-id", item.id));
    return elem;
}

function createAttr(name, value) {
    var attr = document.createAttribute(name);
    attr.value = value;
    return attr;
}

function addItem(elemParent, elemChild) {
    elemParent.appendChild(elemChild);
}

function handler(parent, callback) {
    const rows = parent.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].onclick = function () {
            callback(rows[i])
        };
    }
}
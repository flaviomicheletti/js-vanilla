// API
// teste no terminal
// curl -X GET -i https://jsonplaceholder.typicode.com/todos
//
// https://jsonplaceholder.typicode.com/

// const bar = require("./foo.js");
// bar();

const { handler1, handler2, handler3 } = require("./handlers.js");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    // console.log(todos);
    todos.forEach(function (item, indice) {
      // console.log(item.title);
      addItem(tbody, createElem(item));
    });

    // handler1(tbody);
    // handler2(divMain);
    // handler3(divMain, function (row) {
    //     console.log(row);
    // });
  })
  .catch((error) => {
    console.warn("Failed!", error);
  });

let main = document.getElementById("main");

main.innerHTML = `<table class="table" id="mytable">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
  </tr>
</thead>
<tbody>
</tbody>
</table>`;

let table = document.getElementById("mytable");
let tbody = table.children[1];
// console.log(table.children[1]);

function createElem(item) {
  let elem = document.createElement("tr");
  elem.innerHTML = `<td scope="row">${item.id}</th>
        <td>${item.title}</td>`;
  return elem;
}

function addItem(elemParent, elemChild) {
  elemParent.appendChild(elemChild);
}

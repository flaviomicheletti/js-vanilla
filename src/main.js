// API
// teste no terminal
// curl -X GET -i https://jsonplaceholder.typicode.com/todos
//
// https://jsonplaceholder.typicode.com/

// const bar = require("./foo.js");
// bar();

// (async () => {
//   try {
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const dados = await reponse.json();
//     console.warn(dados.length);
//   } catch (error) {
//     console.warn("GET todos/ failed!", error);
//   }
// })();

const todoService = {
  getTodos: async (callback) => {
    try {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
      const dados = await reponse.json();
      // console.warn(dados.length);
      callback(dados);
    } catch (error) {
      console.warn("GET todos/ failed!", error);
    }
  },
};

window.todoService = todoService;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    // console.log(todos);
    todos.forEach(function (item, indice) {
      // console.log(item.title);
      //   addItem(tbody, createElem(item));
      tbody.appendChild(createElem(item));
    });

    handler(tbody, function (item) {
      //   console.log(item.dataset.id);
      fetch("https://jsonplaceholder.typicode.com/todos/" + item.dataset.id)
        .then((response) => response.json())
        .then((todo) => {
          console.log(todo);
          let eTitle = document.getElementById("title");
          let eUserId = document.getElementById("userId");
          let eCompleted = document.getElementById("completed");

          eTitle.value = todo.title;
          eUserId.value = todo.userId;
          eCompleted.checked = todo.completed;
        })
        .catch((error) => {
          console.warn(" GET todos/:id Failed!", error);
        });
    });
  })
  .catch((error) => {
    console.warn("GET todos/ failed!", error);
  });

let leftCol = document.getElementById("leftCol");
leftCol.innerHTML = `<table class="table" id="mytable">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
  </tr>
</thead>
<tbody>
</tbody>
</table>`;

let rigthCol = document.getElementById("rigthCol");
rigthCol.innerHTML = `<form>
<div class="mb-3">
  <label for="title" class="form-label">Title</label>
  <input type="text" class="form-control" id="title" />
</div>
<div class="mb-3">
  <label for="userId" class="form-label">User id</label>
  <input type="text" class="form-control" id="userId" />
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="completed" />
  <label class="form-check-label" for="completed">Completed</label>
</div>
</form>`;

let table = document.getElementById("mytable");
let tbody = table.children[1];

function createElem(item) {
  let elem = document.createElement("tr");
  elem.innerHTML = `<td scope="row">${item.id}</th>
    <td>${item.title}</td>`;
  elem.setAttributeNode(createAttr("data-id", item.id));
  return elem;
}

function createAttr(name, value) {
  var attr = document.createAttribute(name);
  attr.value = value;
  return attr;
}

function handler(parent, callback) {
  const rows = parent.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].onclick = function () {
      callback(rows[i]);
    };
  }
}

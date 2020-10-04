import form from './form.js';
import table from './table.js';
import service from './TodoService.js';
// service.getTodos((a) => console.log(a));

// inicializando a coluna esquerda (table)
let leftCol = document.getElementById('leftCol');
leftCol.innerHTML = table.getHtml();

// inicializando a coluna direita (form)
let rigthCol = document.getElementById('rigthCol');
rigthCol.innerHTML = form;

// on mount (?) table
table.setTable(document.getElementById('mytable'));

service.getTodos((todos) => {
  // populando tabela
  todos.forEach(function (item, indice) {
    table.tbody.appendChild(table.createElem(item));
  });

  // evento ao clicar em cada item
  table.handler(table.tbody, function (item) {
    service.getTodo(item.dataset.id, (todo) => {
      // console.log(todo);
      document.getElementById('title').value = todo.title;
      document.getElementById('userId').value = todo.userId;
      document.getElementById('completed').checked = todo.completed;
    });
  });
});

import form from './form.js';
import table from './table.js';
import service from './TodoService.js';

// incializando a tabela
let leftCol = document.getElementById('leftCol');
leftCol.innerHTML = table.getHtml();

// incializando o form
let rigthCol = document.getElementById('rigthCol');
rigthCol.innerHTML = form;

// populando a tabela
table.setTable(document.getElementById('mytable'));

// service.getTodos((a) => console.log(a));

service.getTodos((todos) => {
  // populando tabela
  todos.forEach(function (item, indice) {
    table.tbody.appendChild(table.createElem(item));
  });

  // evento ao clicar em cada item
  table.handler(table.tbody, function (item) {
    service.getTodo(item.dataset.id, (todo) => {
      // console.log(todo);
      let eTitle = document.getElementById('title');
      let eUserId = document.getElementById('userId');
      let eCompleted = document.getElementById('completed');

      eTitle.value = todo.title;
      eUserId.value = todo.userId;
      eCompleted.checked = todo.completed;
    });
  });
});

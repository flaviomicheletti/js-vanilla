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

        //http://www.java2s.com/Tutorials/Javascript/Javascript_Element_How_to/Table_Row/Handle_click_event_for_table_row_tr.htm          
        // var rows = document.getElementsByTagName("p");
        // for (var i = 0; i < rows.length; i++) {
        //     rows[i].onclick = function () {
        //         console.log(this.textContent);
        //     };
        // }
        // addRowHandlers(divMain);
        onRowClick(divMain, function (row) {
            // var value = row.getElementsByTagName("td")[0].innerHTML;
            // document.getElementById('click-response').innerHTML = value + " clicked!";
            console.log(row);
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

// https://stackoverflow.com/questions/1207939/adding-an-onclick-event-to-a-table-row
// function addRowHandlers(parent) {
//     var rows = parent.getElementsByTagName("p");
//     for (let i = 0; i < rows.length; i++) {
//         var currentRow = parent.children[i];
//         // console.log(parent.children[i]);
//         var createClickHandler = function (row) {
//             return function () {
//                 console.log(Math.random());
//             };
//         };
//         currentRow.onclick = createClickHandler(currentRow);
//     }
// }

// https://www.codexpedia.com/javascript/javascript-add-on-click-event-on-table-rows/
function onRowClick(parent, callback) {
    var rows = parent.getElementsByTagName("p"),
        i;
    for (i = 0; i < rows.length; i++) {
        parent.children[i].onclick = function (row) {
            return function () {
                callback(row);
            };
        }(parent.children[i]);
    }
};


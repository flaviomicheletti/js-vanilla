//
// Outros exemplos
//

// https://stackoverflow.com/questions/1207939/adding-an-onclick-event-to-a-table-row
//
// exemplo2(divMain);
//
function exemplo2(parent) {
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

    for (let i = 0; i < rows.length; i++) {
        var currentRow = parent.children[i];
        var createClickHandler = function (row) {
            return function () {
                console.log(row);
            };
        };
        currentRow.onclick = createClickHandler(currentRow);
    }

}

// https://www.codexpedia.com/javascript/javascript-add-on-click-event-on-table-rows/
//
// exemplo3(divMain, function (row) {
//     console.log(row);
// });
function exemplo3(parent, callback) {
    const rows = parent.getElementsByTagName("p");

    for (let i = 0; i < rows.length; i++) {
        const currentRow = parent.children[i];
        currentRow.onclick = function (row) {
            return function () {
                callback(row);
            };
        }(currentRow);
    }
};

//
//
//
export { exemplo2, exemplo3 };

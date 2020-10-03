//
//
//
function createElem(item) {
  let elem = document.createElement('tr');
  elem.innerHTML = `<th scope="row">${item.id}</th>
        <td>${item.title}</td>`;
  elem.setAttributeNode(createAttr('data-id', item.id));
  return elem;
}

//
//
//
function createAttr(name, value) {
  var attr = document.createAttribute(name);
  attr.value = value;
  return attr;
}

//
//
//
function handler(parent, callback) {
  const rows = parent.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    rows[i].onclick = function () {
      callback(rows[i]);
    };
  }
}

export { createElem, createAttr, handler };

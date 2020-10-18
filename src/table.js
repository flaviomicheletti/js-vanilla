import { createElem, createAttr, handler } from './utils.js';

const table = {
  setTable: (el) => {
    table._table = el;
    table.setTbody();
  },
  setTbody: () => {
    table.tbody = table.getTbody();
  },
  getHtml: () => {
    return `<table class="table" id="mytable">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
    </table>`;
  },
  getTbody: () => table._table.children[1],
  createElem,
  createAttr,
  handler
};

export default table;

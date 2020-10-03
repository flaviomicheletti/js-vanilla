const todoService = {
  getTodos: async (callback) => {
    try {
      const reponse = await fetch('https://jsonplaceholder.typicode.com/todos');
      const dados = await reponse.json();
      // console.warn(dados.length);
      callback(dados);
    } catch (error) {
      console.warn('GET todos/ failed!', error);
    }
  },
  getTodo: async (id, callback) => {
    try {
      const reponse = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
      const dados = await reponse.json();
      callback(dados);
    } catch (error) {
      console.warn(' GET todos/:id Failed!', error);
    }
  }
};

export default todoService;

// (async () => {
//   try {
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const dados = await reponse.json();
//     console.warn(dados.length);
//   } catch (error) {
//     console.warn("GET todos/ failed!", error);
//   }
// })();

// window.todoService = todoService;

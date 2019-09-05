import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

// interface is used to defined the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  //   logTood(id, completed, title); // wrong result
  //    ->
  //     the Todo with ID: 1
  //     Has a title of false
  //     Is it finished? delectus aut autem

  logTood(id, title, completed);
});

const logTood = (id: number, title: string, completed: boolean) => {
  console.log(`
        the Todo with ID: ${id}
        Has a title of ${title}
        Is it finished? ${completed}
    `);
};

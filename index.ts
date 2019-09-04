import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(response => console.log(response.data));

// [CMD] "tsc index.ts" - compile the index.ts into plain JavaScript

// [CMD] "node index.js" - execute the compiled index.js file

// [CMD] "ts-node index.ts" - combine "tsc" and "node" command, compile & execute at the same time

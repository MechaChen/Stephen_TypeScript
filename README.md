## 3. Enviroment Setup

### TypeScript Compiler

```
    npm install -g typescript ts-node
```

use following command to test installation

```
    tsc --help
```

### VScode

we can use following command to open VScode in any directory

```
code .
```

## 4. A First App

#### GOAL :

Make a network request to fetch some JSON and print the result

#### REASON :

Make some bugs into this application, and use TypeScript to find these bugs

#### STEP :

> 1. Take a look at the API we'll use to fetch data
>
> 2. Create a new project directory
> 3. Create a package.json file
> 4. Install axios to make a request
> 5. Write code!

###### o

_Fake JSON API here :_
<https://jsonplaceholder.typicode.com/>
<http://jsonplaceholder.typicode.com/todos/1>

use following code to make new fake data

```
mkdir fetchjson
```

```
cd fetchjson
```

```javascript
npm init -y
// make a json file with what you just copy
```

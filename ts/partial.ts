interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {
        ...todo,
        ...fieldsToUpdate
    }
}

const todo1: Todo = {
    title: 'lyx',
    description: 'desc'
}
const todo3 = {
    title2: 'lyx',
    description: 'desc'
}

const todo2 = updateTodo(todo1, todo3)

console.log(todo1, todo2, todo3);
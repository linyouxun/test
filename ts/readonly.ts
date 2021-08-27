interface Todo2 {
    name: string;
}

const todo: Readonly<Todo2> | any = {
    name: 'lyx',
    age: 18
}

todo.name = 'lyx2';
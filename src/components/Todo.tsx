import React, { FormEvent, useState } from 'react'

type item = {
    id: number;
    text: string;
    completed: boolean;
}
export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([
        { id: 1, text: "Learn Typescript with Anders", completed: false },
        { id: 2, text: "Learn Typescript with Jennie", completed: false }
    ])

    const [input, setInput] = useState<string>('');

    const handleToogle = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        }))
    }
    const handleClick = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newTodo: item = { id: Date.now(), text: input, completed: false }
        setTodos([...todos,newTodo])
    }
    return <div className='main-container'>
        <h1>Todo List</h1>

        {/* show items in a list */}
        <ul>
            {todos.map((todo) => (
                <li onClick={() => handleToogle(todo.id)}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    key={todo.id}>
                    {todo.text}</li>
            ))}
        </ul>

        {/* input for todo */}
        <input type="text" placeholder='Add Todo Item'
         onChange={(e) => { setInput(e.currentTarget.value) }} />
        <button onClick={handleClick}>Add</button>
    </div>

}

export default TodoList

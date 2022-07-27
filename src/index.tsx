import React, { MouseEventHandler, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

type FormEle = React.FormEvent<HTMLFormElement>;
interface ITodo {
    text: string
    complete: boolean
}

export default function App(): JSX.Element {
    const [value, setValue] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleSubmit = (e: FormEle) => {
        e.preventDefault()
        addTodos(value)
        setValue('')
    }

    const addTodos = (text: string) => {
        const newTodos: ITodo[] = [...todos, { text, complete: false }]
        setTodos(newTodos)
    }

    const completeTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
    }

    const removeTodo = (index: number): void => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <h1>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
                <button type='submit'>Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={todo.complete ? { WebkitTextDecorationLine: 'line-through', textDecorationLine: 'line-through', color: 'gray' } : {}}>
                        <span>{todo.text} </span>
                        <button style={{ marginTop: '5px' }} onClick={() => completeTodo(index)}>{todo.complete ? "incomplete" : "complete"}</button>
                        <button style={{ marginLeft: '20px', marginTop: '5px', padding: '0 10px', backgroundColor: 'red', color: 'white',  }} onClick={() => removeTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

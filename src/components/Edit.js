import { useState } from "react";

const Edit = (props) => {
    // let emptyTodo = { title: '' }
    const [todo, setTodo] = useState(props.todo)

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdate(todo)
    }

    return (
        <>
            <details>
                <summary>Edit Todo</summary>
                <form onSubmit ={handleSubmit} >
                    <input type='text' name='title' value={todo.title} onChange={handleChange} />
                    <input type='submit' />
                </form>
            </details>
        </>
    )
}

export default Edit
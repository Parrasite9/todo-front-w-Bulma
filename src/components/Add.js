import { useState, useEffect } from "react";

const Add = (props) => {
    let emptyTodo = {title: ''}
    const [todo, setTodo] = useState(emptyTodo)
    
    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(todo)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name="title" placeholder="I need todo..." className="task-input"  required onChange={handleChange}/>
                <input type='submit' />
            </form>
        </>
    )
}

export default Add
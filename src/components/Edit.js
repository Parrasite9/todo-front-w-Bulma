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
                {/* <summary>Edit Todo</summary> */}
                <summary>
                    <span class="icon-text has-text-warning-dark">
                        <span class="icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                        <span>Edit</span>
                    </span>
                </summary>
                <form onSubmit ={handleSubmit} >
                    <input className="updateInput" type='text' name='title' value={todo.title} onChange={handleChange} />
                    <input className="submitbtn button is-primary is-small is-warning" type='submit' />
                </form>
            </details>
        </>
    )
}

export default Edit
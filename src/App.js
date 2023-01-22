import { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

  let [todos, setTodos] = useState([])

  // READ FUNCTION 
  const getTodo = () => {
    axios.get('http://localhost:8000/api/todo').then((response) => 
    setTodos(response.data), (err) =>
    console.log(err))
    console.log(todos);
  }

  // CREATE FUNCTION 
  const handleCreate = (addTodo) => {
    console.log(addTodo);
    axios.post('http://localhost:8000/api/todo', addTodo).then((response) => {
      console.log(response);
      // READ FUNCTION  
      getTodo()
    })
  }

  // UPDATE FUNCTION
  const handleUpdate = (editTodo) => {
    console.log(editTodo);
    axios.put('http://localhost:8000/api/todo/' + editTodo.id, editTodo).then((response) => {
      getTodo()
    })
  } 


  // DELETE FUNCTION 
  const handleDelete = (e) => {
    axios.delete('http://localhost:8000/api/todo/' + e.target.value).then((response) => {
      getTodo()
    })
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='todo-container'>
          <h1>Hello World</h1>
          <Add handleCreate={handleCreate} />
          <div className='todos'>
            {todos.map((todo) => {
              return (
                <>
                  <div className='todo' key={todo.id}>
                    <h4>{todo.title}</h4>
                    <Edit handleUpdate={handleUpdate} todo={todo} />
                    <button onClick={handleDelete} value={todo.id} >X</button>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
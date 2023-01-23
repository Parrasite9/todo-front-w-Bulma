import { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add'
import Edit from './components/Edit'

import { fontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  let [todos, setTodos] = useState([])

  // READ FUNCTION 
  const getTodo = () => {
    axios.get('https://fathomless-refuge-25826.herokuapp.com/api/todo').then((response) => 
    setTodos(response.data), (err) =>
    console.log(err))
    console.log(todos);
  }

  // CREATE FUNCTION 
  const handleCreate = (addTodo) => {
    console.log(addTodo);
    axios.post('https://fathomless-refuge-25826.herokuapp.com/api/todo', addTodo).then((response) => {
      console.log(response);
      // READ FUNCTION  
      getTodo()
    })
  }

  // UPDATE FUNCTION
  const handleUpdate = (editTodo) => {
    console.log(editTodo);
    axios.put('https://fathomless-refuge-25826.herokuapp.com/api/todo/' + editTodo.id, editTodo).then((response) => {
      getTodo()
    })
  } 


  // DELETE FUNCTION 
  const handleDelete = (e) => {
    axios.delete('https://fathomless-refuge-25826.herokuapp.com/api/todo/' + e.target.value).then((response) => {
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
          <h1 class="header text-3xl font-bold underline">My Todo List</h1>
          <Add handleCreate={handleCreate} />
          <div className='todos'>
            {todos.map((todo) => {
              return (
                <>
                  <div className='todo' key={todo.id}>
                      <h4 className='todo-title'>{todo.title}</h4>
                      <Edit handleUpdate={handleUpdate} todo={todo} />
                      {/* <button className='deletebtn' onClick={handleDelete} value={todo.id} >X</button> */}
                      <button className='delete is-small has-background-danger' onClick={handleDelete} value={todo.id}></button>
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
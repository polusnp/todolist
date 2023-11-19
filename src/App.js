import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoForm from "./components/todos/TodoForm"
import TodoList from "./components/todos/TodoList"
import TodoActions from "./components/todos/TodosActions"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedeTododHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length !== 0 && (
        <TodoActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedeTododHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completes ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }!`}</h2>
      )}
    </div>
  )
}

export default App

import Todo from "./Todo"
import styles from "./TodoList.module.css"

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h3>TODO LIST IS EMPTY</h3>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList

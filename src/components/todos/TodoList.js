import Todo from "./Todo"
import styles from "./TodoList.module.css"

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h3>TODO LIST IS EMPTY</h3>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList

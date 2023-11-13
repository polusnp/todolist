import styles from "./Todo.module.css"

function Todo({ todo, index, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo

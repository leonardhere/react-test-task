import React from 'react'
import TaskMenu from '../../TaskMenu'
import styles from '../../Tasks/Tasks.module.css'

const NewTasks = () => {
  return (
    <div className={styles.taskmoduleContainer}>
        <TaskMenu/>
        <div className={styles.tasktitle}>Список новых задач</div>
    </div>
  )
}

export default NewTasks
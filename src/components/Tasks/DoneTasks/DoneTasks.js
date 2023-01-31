import React from 'react'
import TaskMenu from '../../TaskMenu'
import styles from '../../Tasks/Tasks.module.css'

const DoneTasks = () => {
  return (
    <div className={styles.taskmoduleContainer}>
        <TaskMenu/>
        <div className={styles.tasktitle}>Список выполненных задач</div>
    </div>
  )
}

export default DoneTasks
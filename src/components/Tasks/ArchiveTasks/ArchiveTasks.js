import React from 'react'
import TaskMenu from '../../TaskMenu'
import styles from '../../Tasks/Tasks.module.css'

const ArchiveTasks = () => {
  return (
    <div className={styles.taskmoduleContainer}>
        <TaskMenu/>
        <div className={styles.tasktitle}>Здесь хранятся архивные задачи</div>
    </div>
  )
}

export default ArchiveTasks
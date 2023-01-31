import React from 'react'
import TaskMenu from '../TaskMenu'
import styles from './TasksPage.module.css'
import TaskPlace from '../TaskPlace/TaskPlace';

const About = () => {
  return (
    <div className={styles.containerPage}>
      <TaskMenu/>
      <TaskPlace/>
    </div>
  )
}

export default About
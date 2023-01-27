import React from 'react'
import MainPlace from '../MainPlace/MainPlace'
import TaskMenu from '../TaskMenu'
import styles from './TasksPage.module.css'

const About = () => {
  return (
    <div className={styles.containerPage}>
      <TaskMenu/>
      <MainPlace title="Здесь хранятся задачи"/>
    </div>
  )
}

export default About
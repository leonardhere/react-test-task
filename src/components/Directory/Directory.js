import React from 'react'
import styles from './Directory.module.css'
import MainPlace from '../MainPlace/MainPlace'

const Directory = () => {
  return (
    <div className={styles.containerPage}>
        <MainPlace title="Здесь хранятся справочники. Бокового меню здесь нет"/>
    </div>
  )
}

export default Directory